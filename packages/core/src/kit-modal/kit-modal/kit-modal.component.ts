import {
  AfterContentInit, Component, ContentChild, EventEmitter, Inject, Input, OnDestroy, OnInit,
  Output,
} from '@angular/core';
import { KitOverlayDirective } from '../../kit-overlay';
import { Partial } from '../../util';
import { KitModalRef } from '../kit-modal-ref';
import { KitModalService } from '../kit-modal.service';
import { kitModalDefaultParams, KitModalParams } from '../meta';

@Component({
  selector: 'kit-modal',
  template: '<ng-content></ng-content>',
  providers: [
    KitModalRef,
  ],
})
export class KitModalComponent implements OnDestroy, OnInit, AfterContentInit {
  @Output() close = new EventEmitter<void>();

  @ContentChild(KitOverlayDirective) overlay: KitOverlayDirective;

  private _displayed = false;

  constructor(
    private ref: KitModalRef<any>,
    private service: KitModalService,
    @Inject(kitModalDefaultParams) private defaultParams: Partial<KitModalParams>,
  ) {
    this.ref.params = this.defaultParams;
    this.ref.onClose.subscribe(() => {
      this.close.emit();
    });
  }

  @Input() set backdropClose(backdropClose: boolean) {
    this.ref.applyParams({backdropClose});
  }

  @Input() set escClose(escClose: boolean) {
    this.ref.applyParams({escClose});
  }

  @Input() set scrollLock(scrollLock: boolean) {
    this.ref.applyParams({scrollLock});
  }

  ngAfterContentInit() {
    this.overlay.displayed.subscribe(displayed => {
      console.log('displayed', displayed);
      if (this._displayed !== displayed) {
        this._displayed = displayed;
        if (displayed && this.overlay.viewRef) {
          this.ref.viewRef = this.overlay.viewRef;
          this.service.registerRef(this.ref);
        } else {
          this.ref.destroy();
        }
      }
    });
  }

  ngOnDestroy() {
    this.ref.destroy();
  }

  ngOnInit() {
  }
}
