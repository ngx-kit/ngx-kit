import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitModalCanClose, KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'ui-modal-demo-can-close-modal',
  templateUrl: './ui-modal-demo-can-close-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiModalDemoCanCloseModalComponent implements KitModalCanClose {
  closable = false;

  constructor(
    private ref: KitModalRef<UiModalDemoCanCloseModalComponent>,
  ) {
  }

  close() {
    this.ref.close();
  }

  canClose() {
    return this.closable;
  }
}
