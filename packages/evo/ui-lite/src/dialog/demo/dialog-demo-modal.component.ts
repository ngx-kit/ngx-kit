import { animateChild, query, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { EvoDialogRef } from '@ngx-kit/evo/dialog';
import { LiteDialogSize } from '../meta';

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

  @Input() size: LiteDialogSize = 'm';

  constructor(
    private ref: EvoDialogRef,
  ) {
  }

  close() {
    this.ref.close();
  }
}
