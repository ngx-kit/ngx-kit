import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitDropdownMenuItemComponent } from './kit-dropdown-menu-item.component';
import { KitDropdownMenuComponent } from './kit-dropdown-menu.component';

const exported = [
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
export class KitDropdownMenuModule {
}
