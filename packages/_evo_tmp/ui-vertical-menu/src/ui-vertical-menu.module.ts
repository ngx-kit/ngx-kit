import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/core';
import { UiVerticalMenuGroupComponent } from './ui-vertical-menu-group/ui-vertical-menu-group.component';
import { UiVerticalMenuItemComponent } from './ui-vertical-menu-item/ui-vertical-menu-item.component';
import { UiVerticalMenuSubComponent } from './ui-vertical-menu-sub/ui-vertical-menu-sub.component';
import { UiVerticalMenuComponent } from './ui-vertical-menu/ui-vertical-menu.component';

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
  ],
  declarations: [
    UiVerticalMenuComponent,
    UiVerticalMenuItemComponent,
    UiVerticalMenuGroupComponent,
    UiVerticalMenuSubComponent,
  ],
  exports: [
    KitCollapseModule,
    UiVerticalMenuComponent,
    UiVerticalMenuItemComponent,
    UiVerticalMenuGroupComponent,
    UiVerticalMenuSubComponent,
  ],
})
export class UiVerticalMenuModule {
}
