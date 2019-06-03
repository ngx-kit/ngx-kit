import { animateChild, query, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { EvoDialogRef } from '../evo-dialog-ref';
import { EvoDialogSize } from '../meta';

@Component({
  templateUrl: './evo-dialog-demo-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@modalHost', animateChild(), {optional: true}),
      ]),
    ]),
  ],
})
export class EvoDialogDemoModalComponent {
  @HostBinding('@host') hostTrigger: void;

  @Input() size: EvoDialogSize = 'm';

  constructor(
    private ref: EvoDialogRef,
  ) {
  }

  close() {
    this.ref.close();
  }
}
