import { animateChild, query, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { DialogRef } from '@ngx-kit/evo/dialog';
import { DialogSize } from '../meta';

@Component({
  templateUrl: './dialog-demo-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@modalHost', animateChild(), {optional: true}),
      ]),
    ]),
  ],
})
export class DialogDemoModalComponent {
  @HostBinding('@host') hostTrigger: void;

  @Input() size: DialogSize = 'm';

  constructor(
    private ref: DialogRef,
  ) {
  }

  close() {
    this.ref.close();
  }
}
