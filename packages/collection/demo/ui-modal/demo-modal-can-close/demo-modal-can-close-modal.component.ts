import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitModalCanClose, KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'demo-modal-can-close-modal',
  templateUrl: './demo-modal-can-close-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoModalCanCloseModalComponent implements KitModalCanClose {
  closable = false;

  constructor(
    private ref: KitModalRef<DemoModalCanCloseModalComponent>,
  ) {
  }

  close() {
    this.ref.close();
  }

  canClose() {
    return this.closable;
  }
}
