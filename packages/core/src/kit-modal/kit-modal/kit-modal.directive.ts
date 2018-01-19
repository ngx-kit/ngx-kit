import { Directive, EventEmitter, OnDestroy, Output } from '@angular/core';
import { KitModalRef } from '../kit-modal-ref';
import { KitModalService } from '../kit-modal.service';

@Directive({
  selector: '[kitModal]',
  providers: [KitModalRef],
})
export class KitModalDirective implements OnDestroy {
  @Output() close = new EventEmitter<void>();

  constructor(
    private ref: KitModalRef<any>,
    private service: KitModalService,
  ) {
    this.service.registerRef(this.ref);
    this.ref.onClose.subscribe(() => {
      this.close.emit();
    });
  }

  ngOnDestroy() {
    this.ref.destroy();
  }
}
