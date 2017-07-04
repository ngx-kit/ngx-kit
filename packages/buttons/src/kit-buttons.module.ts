import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCoreModule } from '@ngx-kit/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitButtonGroupComponent } from './kit-button-group/kit-button-group.component';
import { KitButtonComponent } from './kit-button/kit-button.component';
import { KitDropdownMenuItemComponent } from './kit-dropdown-menu/kit-dropdown-menu-item.component';
import { KitDropdownMenuComponent } from './kit-dropdown-menu/kit-dropdown-menu.component';

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
  providers: [],
})
export class KitButtonsModule {
}
