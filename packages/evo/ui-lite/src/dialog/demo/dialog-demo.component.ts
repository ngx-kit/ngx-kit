import { Component } from '@angular/core';
import { Dialog } from '@ngx-kit/evo/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogDemoModalComponent } from './dialog-demo-modal.component';

/**
 * @demo
 */
@Component({
  templateUrl: './dialog-demo.component.html',
})
export class DialogDemoComponent {
  constructor(
    private dialog: Dialog,
  ) {
  }

  showComponent() {
    this.dialog.show({
      component: DialogDemoModalComponent,
      dialogComponent: DialogComponent,
      closeOnEsc: true,
      overlayConfig: {
        width: 500,
      },
    });
  }
}
