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

@Directive({
  selector: '[kitMq]',
})
export class KitMqDirective implements OnChanges, OnDestroy {
  @Input() kitMq: KitMqParams;

  private _viewRef: ViewRef | null;

  private subscription: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private cdr: ChangeDetectorRef,
    private vcr: ViewContainerRef,
    private mq: KitMqService,
  ) {
  }

  get viewRef(): ViewRef | null {
    return this._viewRef;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kitMq']) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.subscription = this.mq.observe(this.kitMq)
        .subscribe(matches => {
          this.updateHost(!!matches);
          this.cdr.detectChanges();
        });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.destroyView();
  }

  updateHost(matches: boolean) {
    if (matches && !this._viewRef) {
      this._viewRef = this.vcr.createEmbeddedView(this.templateRef);
    } else if (!matches) {
      this.destroyView();
    }
  }

  private destroyView() {
    if (this._viewRef) {
      this._viewRef.destroy();
      this._viewRef = null;
    }
  }
}
