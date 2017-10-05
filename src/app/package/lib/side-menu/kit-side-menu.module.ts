import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/ngx-kit';
import { KitSideMenuGroupComponent } from './kit-side-menu-group/kit-side-menu-group.component';
import { KitSideMenuItemComponent } from './kit-side-menu-item/kit-side-menu-item.component';
import { KitSideMenuSubComponent } from './kit-side-menu-sub/kit-side-menu-sub.component';
import { KitSideMenuComponent } from './kit-side-menu/kit-side-menu.component';

const exp = [
  KitSideMenuComponent,
  KitSideMenuItemComponent,
  KitSideMenuGroupComponent,
  KitSideMenuSubComponent,
];

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitSideMenuModule {
}
