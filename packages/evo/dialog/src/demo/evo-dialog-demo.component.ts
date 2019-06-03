import { Component } from '@angular/core';
import { EvoDialogService } from '../evo-dialog.service';
import { EvoDialogDemoModalComponent } from './evo-dialog-demo-modal.component';

/**
 * @demo
 */
@Component({
  templateUrl: './evo-dialog-demo.component.html',
})
export class EvoDialogDemoComponent {
  constructor(
    private modal: EvoDialogService,
  ) {
  }

  showComponent() {
    this.modal.show({component: EvoDialogDemoModalComponent});
  }
}
