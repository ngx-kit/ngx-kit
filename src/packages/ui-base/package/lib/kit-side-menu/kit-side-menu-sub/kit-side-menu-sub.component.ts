import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';

/**
 * @apiOrder 5
 */
@Component({
  selector: 'kit-side-menu-sub',
  template: `
    <div class="wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./kit-side-menu-sub.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('collapse', [
      transition(':enter', [
        style({height: 0}),
        animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({height: '*'})),
      ]),
      transition(':leave', [
        style({height: '*'}),
        animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({height: 0})),
      ]),
    ]),
  ],
})
export class KitSideMenuSubComponent {
  @HostBinding('@collapse') collapseTrigger = true;

  @Input() kitSideMenuSub: void;
}
