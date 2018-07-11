import { animateChild, query, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { KitModalCanClose, KitModalRef } from '@ngx-kit/core';

@Component({
  selector: 'ui-modal-demo-can-close-modal',
  templateUrl: './ui-modal-demo-can-close-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@modalHost', animateChild(), {optional: true}),
      ]),
    ]),
  ],
})
export class UiModalDemoCanCloseModalComponent implements KitModalCanClose {
  @HostBinding('@host') hostTrigger: void;

  closable = false;

  constructor(
    private ref: KitModalRef<UiModalDemoCanCloseModalComponent>,
  ) {
  }

  close() {
    this.ref.close();
  }

  canClose() {
    return this.closable;
  }
}
