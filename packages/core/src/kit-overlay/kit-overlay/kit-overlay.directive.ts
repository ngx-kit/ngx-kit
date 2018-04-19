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
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { KitOverlayService } from '../kit-overlay.service';

@Directive({
  selector: '[kitOverlay]',
})
export class KitOverlayDirective implements OnChanges, OnDestroy {
  @Input() kitOverlay: boolean;

  private doCheckSub: Subscription;

  private _viewRef: ViewRef | null;

  private _displayed = new BehaviorSubject<boolean>(false);

  constructor(
    private templateRef: TemplateRef<any>,
    private service: KitOverlayService,
    private cdr: ChangeDetectorRef,
    private vcr: ViewContainerRef,
  ) {
  }

  get displayed(): Observable<boolean> {
    return this._displayed.asObservable();
  }

  get viewRef(): ViewRef | null {
    return this._viewRef;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kitOverlay']) {
      this.updateHost();
    }
  }

  ngOnDestroy() {
    this.destroyView();
  }

  updateHost() {
    if (this.kitOverlay && !this._viewRef) {
      this._viewRef = this.service.hostTemplate({
        templateRef: this.templateRef,
        viewContainerRef: this.vcr,
      });
      this._viewRef.detectChanges();
      this.doCheckSub = this.service.onHostStable.subscribe(() => {
        if (!this.cdr['destroyed']) {
          this.cdr.detectChanges();
        }
      });
      this._displayed.next(true);
    } else if (!this.kitOverlay) {
      this.destroyView();
      this._displayed.next(false);
    }
  }

  private destroyView() {
    if (this._viewRef) {
      this._viewRef.destroy();
      this._viewRef = null;
    }
    if (this.doCheckSub) {
      this.doCheckSub.unsubscribe();
    }
  }
}
