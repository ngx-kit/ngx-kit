import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { KitModalRef, KitModalService } from '@ngx-kit/core';
import { DemoModalDataBindingModalComponent } from './demo-modal-data-binding-modal.component';

@Component({
  selector: 'demo-modal-data-binding',
  templateUrl: './demo-modal-data-binding.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoModalDataBindingComponent {
  inputField = 'sample text';

  outputField: string;

  private ref: KitModalRef<DemoModalDataBindingModalComponent>;

  constructor(
    private modal: KitModalService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  show() {
    this.ref = this.modal.show(DemoModalDataBindingModalComponent);
    this.ref.input({inputField: this.inputField});
    this.ref.instance.outputField.subscribe((value: any) => {
      this.outputField = value;
      this.cdr.markForCheck();
    });
  }
}
