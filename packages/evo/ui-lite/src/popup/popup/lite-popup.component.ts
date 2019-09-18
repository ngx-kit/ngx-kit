import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { LitePopupToggleDirective } from '../popup-toggle/lite-popup-toggle.directive';

@Component({
  selector: 'lite-popup',
  templateUrl: './lite-popup.component.html',
  styleUrls: ['./lite-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@*', animateChild()),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.95)',
        }),
        animate('150ms ease-out', style({
          opacity: 1,
          transform: 'scale(1)',
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms ease-in', style({
          opacity: 0,
          transform: 'scale(0.95)',
        })),
      ]),
    ]),
  ],
})
export class LitePopupComponent {
  @HostBinding('@host') hostTrigger = true;

  constructor(
    private toggle: LitePopupToggleDirective,
  ) {
  }

  close() {
    this.toggle.close();
  }
}
