import { NgModule } from '@angular/core';

import { KitPopoverModule } from '@ngx-kit/popover';

import { KitDropdownMenuComponent } from './kit-dropdown-menu/kit-dropdown-menu.component';
import { KitDropdownMenuItemComponent } from './kit-dropdown-menu-item/kit-dropdown-menu-item.component';
import { KitDropdownMenuService } from './kit-dropdown-menu.service';

const external = [
  KitDropdownMenuComponent,
  KitDropdownMenuItemComponent,
];

@NgModule({
  imports: [
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
