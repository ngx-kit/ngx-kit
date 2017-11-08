import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/core';
import { UiSideMenuGroupComponent } from './ui-side-menu-group/ui-side-menu-group.component';
import { UiSideMenuItemComponent } from './ui-side-menu-item/ui-side-menu-item.component';
import { UiSideMenuSubComponent } from './ui-side-menu-sub/ui-side-menu-sub.component';
import { UiSideMenuComponent } from './ui-side-menu/ui-side-menu.component';

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
  ],
  exports: [
    UiSideMenuComponent,
    UiSideMenuItemComponent,
    UiSideMenuGroupComponent,
    UiSideMenuSubComponent,
  ],
  declarations: [
    UiSideMenuComponent,
    UiSideMenuItemComponent,
    UiSideMenuGroupComponent,
    UiSideMenuSubComponent,
  ],
  providers: [],
})
export class UiSideMenuModule {
}
