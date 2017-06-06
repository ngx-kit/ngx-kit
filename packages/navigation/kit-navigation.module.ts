import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitBreadcrumbComponent } from './kit-breadcrumb/kit-breadcrumb.component';
import { KitNavComponent } from './kit-nav/kit-nav.component';
import { KitPaginationComponent } from './kit-pagination/kit-pagination.component';

const exported = [
  KitBreadcrumbComponent,
  KitNavComponent,
  KitPaginationComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: []
})
export class KitNavigationModule {
}
