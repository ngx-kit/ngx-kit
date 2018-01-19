import { Directive, EventEmitter, Inject, Input, OnDestroy, Output } from '@angular/core';
import { Partial } from '@ngx-kit/core';
import { KitModalRef } from '../kit-modal-ref';
import { KitModalService } from '../kit-modal.service';
import { kitModalDefaultParams, KitModalParams } from '../meta';

@Directive({
  selector: '[kitModal]',
  providers: [KitModalRef],
})
export class KitModalDirective implements OnDestroy {
  @Output() close = new EventEmitter<void>();

  constructor(
    private ref: KitModalRef<any>,
    private service: KitModalService,
    @Inject(kitModalDefaultParams) private defaultParams: Partial<KitModalParams>,
  ) {
    this.ref.params = this.defaultParams;
    this.service.registerRef(this.ref);
    this.ref.onClose.subscribe(() => {
      this.close.emit();
    });
  }

  @Input() set backdropClose(backdropClose: boolean) {
    this.ref.params = {backdropClose};
  }

  ngOnDestroy() {
    this.ref.destroy();
  }
}
