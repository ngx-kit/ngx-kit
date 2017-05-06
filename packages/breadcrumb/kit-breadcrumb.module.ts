import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { KitBreadcrumbComponent } from './kit-breadcrumb/kit-breadcrumb.component';
import { KitBreadcrumbService } from './kit-breadcrumb.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [
    KitBreadcrumbComponent,
  ],
  declarations: [
    KitBreadcrumbComponent,
  ],
  providers: [
    KitBreadcrumbService,
  ]
})
export class KitBreadcrumbModule {
}
