import { Component } from '@angular/core';
import { KitModalService } from '@ngx-kit/core';
import { UiModalDemoModalComponent } from './ui-modal-demo-modal.component';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-modal-demo.component.html',
})
export class UiModalDemoComponent {
  constructor(
    private modal: KitModalService,
  ) {
  }

  showComponent() {
    this.modal.show({component: UiModalDemoModalComponent});
  }
}
