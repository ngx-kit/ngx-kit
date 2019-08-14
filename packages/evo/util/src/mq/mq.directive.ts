import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Mq } from './mq';
import { MqParams } from './meta';

/**
 * Structural directive to check/observe media query.
 *
 * Works like `*ngIf`.
 *
 *
 * ### Usage
 *
 * ```html
 * <div *kitMq="{from: 'desktop'}">
 *   Displays on desktops and wider.
 * </div>
 * ```
 *
 * ### Force render
 *
 * When you pass a boolean it works like `ngIf`.
 *
 * ```html
 * <div *kitMq="true">
 *   This block will be rendered
 * </div>
 * ```
 *
 * ### Server rendering
 *
 * By default block will not be rendered on the server platform.
 * You can change this behavior:
 *
 * ```html
 * <div *kitMq="{from: 'desktop', server: true}">
 *   Displays on desktops and wider (and on server).
 * </div>
 * ```
 */
@Directive({
  selector: '[evoMq]',
})
export class MqDirective implements OnChanges, OnDestroy {
  @Input() kitMq: MqParams | boolean;

  private viewRef?: ViewRef;

  private subscription: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private cdr: ChangeDetectorRef,
    private vcr: ViewContainerRef,
    private mq: Mq,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kitMq']) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if (this.kitMq === true) {
        // Force displaying
        this.updateHost(true);
      } else if (!this.kitMq) {
        this.updateHost(false);
      } else {
        this.subscription = this.mq.observe(this.kitMq)
          .subscribe(matches => {
            this.updateHost(!!matches);
          });
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private updateHost(matches: boolean) {
    if (matches && !this.viewRef) {
      this.viewRef = this.vcr.createEmbeddedView(this.templateRef);
    } else if (!matches) {
      this.clear();
    }
  }

  private clear() {
    if (this.viewRef) {
      this.vcr.clear();
      this.viewRef = undefined;
    }
  }
}
