import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { UiDrawerPosition } from '../meta';

@Component({
  selector: 'ui-drawer',
  templateUrl: './ui-drawer.component.html',
  styleUrls: ['./ui-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@*', animateChild()),
      ]),
    ]),
    trigger('slide', [
      // top position
      transition('* => top', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0.5,
        }),
        animate('250ms ease-out', style({
          transform: 'translateY(0)',
          opacity: 1,
        })),
      ]),
      transition('top => *', [
        animate('250ms ease-in', style({
          transform: 'translateY(-100%)',
          opacity: 0.5,
        })),
      ]),
      // right position
      transition('* => right', [
        style({
          transform: 'translateX(100%)',
          opacity: 0.5,
        }),
        animate('250ms ease-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        })),
      ]),
      transition('right => *', [
        animate('250ms ease-in', style({
          transform: 'translateX(100%)',
          opacity: 0.5,
        })),
      ]),
      // bottom position
      transition('* => bottom', [
        style({
          transform: 'translateY(100%)',
          opacity: 0.5,
        }),
        animate('250ms ease-out', style({
          transform: 'translateY(0)',
          opacity: 1,
        })),
      ]),
      transition('bottom => *', [
        animate('250ms ease-in', style({
          transform: 'translateY(100%)',
          opacity: 0.5,
        })),
      ]),
      // left position
      transition('* => left', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0.5,
        }),
        animate('250ms ease-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        })),
      ]),
      transition('left => *', [
        animate('250ms ease-in', style({
          transform: 'translateX(-100%)',
          opacity: 0.5,
        })),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('450ms ease-out', style({
          opacity: 1,
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms ease-in', style({
          opacity: 0,
        })),
      ]),
    ]),
  ],
})
export class UiDrawerComponent implements OnInit {
  @Input() position: UiDrawerPosition = 'right';

  @HostBinding('@host') hostTrigger = true;

  constructor() {
  }

  ngOnInit() {
  }
}
