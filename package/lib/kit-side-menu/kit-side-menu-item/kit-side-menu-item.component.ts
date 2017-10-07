import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/ngx-kit';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'kit-side-menu-item,a[kitSideMenuItem]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./kit-side-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class KitSideMenuItemComponent {
  @Input() kitSideMenuItem: void;
}
