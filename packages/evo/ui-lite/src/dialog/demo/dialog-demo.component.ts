import { Component } from '@angular/core';
import { EvoDialog } from '@ngx-kit/evo/dialog';
import { LiteDialogComponent } from '../dialog/lite-dialog.component';
import { DialogDemoModalComponent } from './dialog-demo-modal.component';

/**
 * @demo
 */
@Component({
  templateUrl: './dialog-demo.component.html',
})
export class DialogDemoComponent {
  constructor(
    private dialog: EvoDialog,
  ) {
  }

  showComponent() {
    this.dialog.show({
      component: DialogDemoModalComponent,
      dialogComponent: LiteDialogComponent,
      closeOnEsc: true,
      overlayConfig: {
        width: 500,
      },
    });
  }
}
