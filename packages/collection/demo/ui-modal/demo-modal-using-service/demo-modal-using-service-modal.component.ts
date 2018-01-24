import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'demo-modal-using-service-modal',
  templateUrl: './demo-modal-using-service-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoModalUsingServiceModalComponent {
  constructor(
    private ref: KitModalRef<DemoModalUsingServiceModalComponent>,
  ) {
  }

  close() {
    this.ref.close();
  }
}
