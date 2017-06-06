import { NgModule } from '@angular/core';

import { KitButtonComponent } from './kit-button/kit-button.component';
import { KitDropdownMenuComponent } from './kit-dropdown-menu/kit-dropdown-menu.component';
import { KitDropdownMenuItemComponent } from './kit-dropdown-menu-item/kit-dropdown-menu-item.component';
import { KitDropdownMenuDynamicComponent } from './kit-dropdown-menu-dynamic/kit-dropdown-menu-dynamic.component';

const exported = [
  KitButtonComponent,
  KitDropdownMenuComponent,
  KitDropdownMenuItemComponent,
  KitDropdownMenuDynamicComponent,
];

@NgModule({
  imports: [],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: []
})
export class KitButtonsModule {
}
