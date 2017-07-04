import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCoreModule } from '@ngx-kit/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitBreadcrumbComponent } from './kit-breadcrumb/kit-breadcrumb.component';
import { KitMenuGroupComponent } from './kit-menu/kit-menu-group.component';
import { KitMenuItemComponent } from './kit-menu/kit-menu-item.component';
import { KitMenuSeparatorComponent } from './kit-menu/kit-menu-separator.component';
import { KitMenuSubComponent } from './kit-menu/kit-menu-sub.component';
import { KitMenuComponent } from './kit-menu/kit-menu.component';
import { KitNavComponent } from './kit-nav/kit-nav.component';
import { KitPaginationComponent } from './kit-pagination/kit-pagination.component';

const exported = [
  KitBreadcrumbComponent,
  KitMenuComponent,
  KitMenuGroupComponent,
  KitMenuItemComponent,
  KitMenuSeparatorComponent,
  KitMenuSubComponent,
  KitNavComponent,
  KitPaginationComponent,
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
export class KitNavigationModule {
}
