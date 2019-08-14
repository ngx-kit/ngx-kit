import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { DropdownToggleDirective } from '../dropdown-toggle/dropdown-toggle.directive';

@Component({
  selector: 'ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
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
export class DropdownComponent {
  @HostBinding('@host') hostTrigger = true;

  constructor(
    private toggle: DropdownToggleDirective,
  ) {
  }

  close() {
    this.toggle.close();
  }
}
