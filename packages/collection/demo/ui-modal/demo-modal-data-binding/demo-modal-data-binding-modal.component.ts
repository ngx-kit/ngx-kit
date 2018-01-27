import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'demo-modal-data-binding-modal',
  templateUrl: './demo-modal-data-binding-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoModalDataBindingModalComponent {
  @Input() inputField: string;

  @Output() outputField = new EventEmitter<string>();

  constructor(
    private ref: KitModalRef<DemoModalDataBindingModalComponent>,
  ) {
  }

  closeWith(value: string) {
    this.outputField.emit(value);
    this.ref.close();
  }
}
