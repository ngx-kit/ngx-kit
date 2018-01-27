import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitModalRef, KitModalService } from '@ngx-kit/core';
import { DemoModalCanCloseModalComponent } from './demo-modal-can-close-modal.component';

@Component({
  selector: 'demo-modal-can-close',
  templateUrl: './demo-modal-can-close.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoModalCanCloseComponent {
  private ref: KitModalRef<DemoModalCanCloseModalComponent>;

  constructor(
    private modal: KitModalService,
  ) {
  }

  show() {
    this.ref = this.modal.show(DemoModalCanCloseModalComponent);
  }
}
