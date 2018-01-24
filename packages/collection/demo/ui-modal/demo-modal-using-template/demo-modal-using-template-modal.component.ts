import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'demo-modal-using-template-modal',
  templateUrl: './demo-modal-using-template-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoModalUsingTemplateModalComponent {
  constructor(
    private ref: KitModalRef<DemoModalUsingTemplateModalComponent>,
  ) {
  }

  close() {
    this.ref.close();
  }
}
