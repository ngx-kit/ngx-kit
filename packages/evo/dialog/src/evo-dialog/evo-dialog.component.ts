import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnInit } from '@angular/core';
import { EvoClass } from '@ngx-kit/evo/class';
import { EvoDialogRef } from '../evo-dialog-ref';
import { EvoDialogSize } from '../meta';

@Component({
  selector: 'evo-dialog',
  templateUrl: './evo-dialog.component.html',
  styleUrls: ['./evo-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    EvoClass,
  ],
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
export class EvoDialogComponent implements OnInit, OnChanges {
  @Input() header: string;

  @Input() size: EvoDialogSize = 'm';

  @HostBinding('@modalHost') hostTrigger: void;

  constructor(
    private ref: EvoDialogRef,
    private cl: EvoClass,
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.cl.apply({
      size: this.size,
    });
  }

  close() {
    this.ref.close();
  }
}
