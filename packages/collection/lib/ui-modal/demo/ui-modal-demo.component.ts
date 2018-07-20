import { ChangeDetectorRef, Component } from '@angular/core';
import { KitModalService } from '@ngx-kit/core';
import { UiModalDemoBindingModalComponent } from './ui-modal-demo-binding-modal.component';
import { UiModalDemoCanCloseModalComponent } from './ui-modal-demo-can-close-modal.component';
import { UiModalDemoModalComponent } from './ui-modal-demo-modal.component';

/**
 * @demo
 */
@Component({
  templateUrl: './ui-modal-demo.component.html',
})
export class UiModalDemoComponent {
  display1 = false;

  display3 = false;

  inputField = 'sample text';

  outputField: string;

  constructor(
    private modal: KitModalService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  show2() {
    this.modal.show({component: UiModalDemoModalComponent});
  }

  show4() {
    const ref = this.modal.show({component: UiModalDemoBindingModalComponent});
    ref.input({inputField: this.inputField});
    ref.instance.outputField.subscribe((value: any) => {
      this.outputField = value;
      this.cdr.detectChanges();
    });
  }

  show5() {
    this.modal.show({component: UiModalDemoCanCloseModalComponent});
  }
}
