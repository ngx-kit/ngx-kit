import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'ui-modal-demo-modal',
  templateUrl: './ui-modal-demo-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiModalDemoModalComponent {
  constructor(
    private ref: KitModalRef<UiModalDemoModalComponent>,
  ) {
  }

  close() {
    this.ref.close();
  }
}
