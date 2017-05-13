import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitPopoverModule } from '@ngx-kit/popover';

import { KitDropdownMenuComponent } from './kit-dropdown-menu/kit-dropdown-menu.component';
import { KitDropdownMenuItemComponent } from './kit-dropdown-menu-item/kit-dropdown-menu-item.component';
import { KitDropdownMenuDynamicComponent } from './kit-dropdown-menu-dynamic/kit-dropdown-menu-dynamic.component';
import { KitDropdownMenuService } from './kit-dropdown-menu.service';

const external = [
  KitDropdownMenuComponent,
  KitDropdownMenuItemComponent,
  KitDropdownMenuDynamicComponent,
];

@NgModule({
  imports: [
    CommonModule,
    KitPopoverModule,
  ],
  exports: external,
  declarations: [
    ...external,
  ],
  providers: [
    KitDropdownMenuService,
  ]
})
export class KitDropdownMenuModule {
}
