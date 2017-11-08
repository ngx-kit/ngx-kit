import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/core';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'ui-side-menu-item,a[uiSideMenuItem]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-side-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class UiSideMenuItemComponent {
  @Input() uiSideMenuItem: void;
}
