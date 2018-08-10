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
import { KitMqService } from '../kit-mq.service';
import { KitMqParams } from '../meta';

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
 */
@Directive({
  selector: '[kitMq]',
})
export class KitMqDirective implements OnChanges, OnDestroy {
  @Input() kitMq: KitMqParams | boolean;

  private viewRef?: ViewRef;

  private subscription: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private cdr: ChangeDetectorRef,
    private vcr: ViewContainerRef,
    private mq: KitMqService,
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
      this.cdr.detectChanges();
    } else if (!matches) {
      this.clear();
      this.cdr.detectChanges();
    }
  }

  private clear() {
    if (this.viewRef) {
      this.vcr.clear();
      this.viewRef = undefined;
    }
  }
}
