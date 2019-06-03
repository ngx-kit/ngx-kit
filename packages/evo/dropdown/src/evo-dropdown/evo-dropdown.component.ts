import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { EvoDropdownToggleDirective } from '../evo-dropdown-toggle/evo-dropdown-toggle.directive';

@Component({
  selector: 'evo-dropdown',
  templateUrl: './evo-dropdown.component.html',
  styleUrls: ['./evo-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scaleY(0.5)',
        }),
        animate('150ms ease-out', style({
          opacity: 1,
          transform: 'scaleY(1)',
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms ease-in', style({
          opacity: 0,
          transform: 'scaleY(0.5)',
        })),
      ]),
    ]),
  ],
})
export class EvoDropdownComponent {
  @HostBinding('@host') hostTrigger = true;

  constructor(
    private toggle: EvoDropdownToggleDirective,
  ) {
  }

  close() {
    this.toggle.close();
  }
}
