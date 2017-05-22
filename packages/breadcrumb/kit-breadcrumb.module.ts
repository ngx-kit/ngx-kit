import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { KitBreadcrumbComponent } from './kit-breadcrumb/kit-breadcrumb.component';

const external = [
  KitBreadcrumbComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: external,
  declarations: [
    ...external,
  ],
  providers: []
})
export class KitBreadcrumbModule {
}
