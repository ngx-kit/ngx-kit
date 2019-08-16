import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnInit } from '@angular/core';
import { EvoDialogRef } from '@ngx-kit/evo/dialog';
import { EvoClass } from '@ngx-kit/evo/util';
import { LiteDialogSize } from '../meta';

@Component({
  selector: 'lite-dialog',
  templateUrl: './lite-dialog.component.html',
  styleUrls: ['./lite-dialog.component.scss'],
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
export class LiteDialogComponent implements OnInit, OnChanges {
  @Input() header: string;

  @Input() size: LiteDialogSize = 'm';

  @HostBinding('@modalHost') hostTrigger: void;

  constructor(
    public readonly ref: EvoDialogRef,
    private cl: EvoClass,
  ) {
    console.log('CONSTR', ref);
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
