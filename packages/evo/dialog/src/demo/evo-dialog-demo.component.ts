import { Component } from '@angular/core';
import { EvoDialog } from '../evo-dialog';
import { EvoDialogDemoModalComponent } from './evo-dialog-demo-modal.component';

/**
 * @demo
 */
@Component({
  templateUrl: './evo-dialog-demo.component.html',
})
export class EvoDialogDemoComponent {
  constructor(
    private modal: EvoDialog,
  ) {
  }

  showComponent() {
    this.modal.show({component: EvoDialogDemoModalComponent});
  }
}
