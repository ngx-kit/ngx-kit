import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitBreadcrumbComponent } from './kit-breadcrumb.component';

const exported = [
  KitBreadcrumbComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
export class KitBreadcrumbModule {
}
