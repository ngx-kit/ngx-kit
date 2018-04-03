import { AfterContentInit, Component, ContentChild, EventEmitter, Input, OnDestroy, Output, } from '@angular/core';
import { KitOverlayDirective } from '../../kit-overlay/kit-overlay/kit-overlay.directive';
import { KitModalRef } from '../kit-modal-ref';
import { KitModalService } from '../kit-modal.service';
import { KitModalOptions } from '../meta';

@Component({
  selector: 'kit-modal',
  template: '<ng-content></ng-content>',
  providers: [
    KitModalRef,
  ],
})
export class KitModalComponent implements OnDestroy, AfterContentInit {
  /**
   * Emits when modal should be closed.
   */
  @Output() close = new EventEmitter<void>();

  @ContentChild(KitOverlayDirective) overlay: KitOverlayDirective;

  private _displayed = false;

  constructor(
    private ref: KitModalRef<any>,
    private service: KitModalService,
    private options: KitModalOptions,
  ) {
    this.ref.params = this.options;
    this.ref.onClose.subscribe(() => {
      this.close.emit();
    });
  }

  /**
   * Indicating if clicking the backdrop should close the modal.
   */
  @Input() set backdropClose(backdropClose: boolean) {
    this.ref.applyParams({backdropClose});
  }

  /**
   * Indicating if pressing the `esc` key should close the modal.
   */
  @Input() set escClose(escClose: boolean) {
    this.ref.applyParams({escClose});
  }

  /**
   * Indicating if scroll of body is disabled while modal is displayed.
   */
  @Input() set scrollLock(scrollLock: boolean) {
    this.ref.applyParams({scrollLock});
  }

  ngAfterContentInit() {
    this.overlay.displayed.subscribe(displayed => {
      if (this._displayed !== displayed) {
        this._displayed = displayed;
        if (displayed && this.overlay.viewRef) {
          this.ref.viewRef = this.overlay.viewRef;
          this.service.addRef(this.ref);
        } else {
          this.ref.onDestroy.next();
        }
      }
    });
  }

  ngOnDestroy() {
    this.ref.onDestroy.next();
  }
}
