import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'ui-modal-demo-binding-modal',
  templateUrl: './ui-modal-demo-binding-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiModalDemoBindingModalComponent {
  @Input() inputField: string;

  @Output() outputField = new EventEmitter<string>();

  constructor(
    private ref: KitModalRef<UiModalDemoBindingModalComponent>,
  ) {
  }

  close() {
    this.ref.close();
  }

  closeWith(value: string) {
    this.outputField.emit(value);
    this.ref.close();
  }
}
