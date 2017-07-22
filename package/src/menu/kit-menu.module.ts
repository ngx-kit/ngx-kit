import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitMenuGroupComponent } from './kit-menu-group.component';
import { KitMenuItemComponent } from './kit-menu-item.component';
import { KitMenuSeparatorComponent } from './kit-menu-separator.component';
import { KitMenuSubComponent } from './kit-menu-sub.component';
import { KitMenuComponent } from './kit-menu.component';

const exported = [
  KitMenuComponent,
  KitMenuGroupComponent,
  KitMenuItemComponent,
  KitMenuSeparatorComponent,
  KitMenuSubComponent,
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
export class KitMenuModule {
}
