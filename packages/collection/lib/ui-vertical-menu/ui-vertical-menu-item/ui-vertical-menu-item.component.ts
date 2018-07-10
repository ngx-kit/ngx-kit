import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { KitCollapseItemService } from '@ngx-kit/core';

@Component({
  selector: 'ui-vertical-menu-item,a[uiVerticalMenuItem]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-vertical-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitCollapseItemService,
  ],
})
export class UiVerticalMenuItemComponent {
  @Input() uiVerticalMenuItem: void;
}
