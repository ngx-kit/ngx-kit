import { animateChild, query, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'ui-modal-demo-modal',
  templateUrl: './ui-modal-demo-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@modalHost', animateChild(), {optional: true}),
      ]),
    ]),
  ],
})
export class UiModalDemoModalComponent {
  @HostBinding('@host') hostTrigger: void;

  constructor(
    private ref: KitModalRef<UiModalDemoModalComponent>,
  ) {
  }

  close() {
    this.ref.close();
  }
}
