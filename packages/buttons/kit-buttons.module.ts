import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '@ngx-kit/core';

import { KitButtonComponent } from './kit-button/kit-button.component';
import { KitButtonGroupComponent } from './kit-button-group/kit-button-group.component';
import { KitDropdownMenuComponent } from './kit-dropdown-menu/kit-dropdown-menu.component';
import { KitDropdownMenuItemComponent } from './kit-dropdown-menu/kit-dropdown-menu-item.component';

const exported = [
  KitButtonComponent,
  KitButtonGroupComponent,
  KitDropdownMenuComponent,
  KitDropdownMenuItemComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
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
