import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnInit } from '@angular/core';
import { DialogRef } from '@ngx-kit/evo/dialog';
import { Class } from '@ngx-kit/evo/util';
import { DialogSize } from '../meta';

@Component({
  selector: 'evo-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    Class,
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
export class DialogComponent implements OnInit, OnChanges {
  @Input() header: string;

  @Input() size: DialogSize = 'm';

  @HostBinding('@modalHost') hostTrigger: void;

  constructor(
    private ref: DialogRef,
    private cl: Class,
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
