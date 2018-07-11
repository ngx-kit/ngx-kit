import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { KitOverlayToggleDirective, KitPinPosition } from '@ngx-kit/core';

@Component({
  selector: 'ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.scss'],
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
export class UiDropdownComponent {
  @Input() toggle: KitOverlayToggleDirective;

  @Input() position: KitPinPosition = 'bottom-right';

  @HostBinding('@host') hostTrigger = true;
}
