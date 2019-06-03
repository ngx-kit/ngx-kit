import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { EvoDialogRef } from '../evo-dialog-ref';
import { EvoDialogSize } from '../meta';

@Component({
  selector: 'evo-dialog',
  templateUrl: './evo-dialog.component.html',
  styleUrls: ['./evo-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('modalHost', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
        }),
        animate('250ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('250ms ease-in', style({
          opacity: 0,
          transform: 'translateY(-20px)',
        })),
      ]),
    ]),
  ],
})
export class EvoDialogComponent implements OnInit {
  @Input() header: string;

  @Input() size: EvoDialogSize = 'm';

  @HostBinding('@modalHost') hostTrigger: void;

  constructor(
    private ref: EvoDialogRef,
  ) {
  }

  ngOnInit() {
  }

  close() {
    this.ref.close();
  }
}
