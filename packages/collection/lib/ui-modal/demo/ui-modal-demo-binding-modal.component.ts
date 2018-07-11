import { animateChild, query, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'ui-modal-demo-binding-modal',
  templateUrl: './ui-modal-demo-binding-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@modalHost', animateChild(), {optional: true}),
      ]),
    ]),
  ],
})
export class UiModalDemoBindingModalComponent {
  @HostBinding('@host') hostTrigger: void;

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
