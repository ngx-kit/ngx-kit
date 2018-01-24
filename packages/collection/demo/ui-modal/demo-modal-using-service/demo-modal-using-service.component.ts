import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitModalRef, KitModalService } from '@ngx-kit/core';
import { DemoModalUsingServiceModalComponent } from './demo-modal-using-service-modal.component';

@Component({
  selector: 'demo-modal-using-service',
  templateUrl: './demo-modal-using-service.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoModalUsingServiceComponent {
  private ref: KitModalRef<DemoModalUsingServiceModalComponent>;

  constructor(
    private modal: KitModalService,
  ) {
  }

  show() {
    this.ref = this.modal.show(DemoModalUsingServiceModalComponent);
  }
}
