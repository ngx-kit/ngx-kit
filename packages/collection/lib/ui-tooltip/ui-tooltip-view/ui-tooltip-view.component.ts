import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { KitSidePosition } from '@ngx-kit/core';
import { UiTooltipColors } from '../meta';

@Component({
  selector: 'ui-tooltip-view',
  templateUrl: `./ui-tooltip-view.component.html`,
  styleUrls: ['./ui-tooltip-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('host', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms ease-out', style({opacity: 1})),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms ease-out', style({opacity: 0})),
      ]),
    ]),
  ],
})
export class UiTooltipViewComponent {
  @Input() anchorEl: any;

  @Input() color: UiTooltipColors = 'default';

  @Input() content: string;

  @HostBinding('@host') hostTrigger = true;

  @Input() position: KitSidePosition = 'top-center';
}
