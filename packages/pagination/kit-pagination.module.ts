import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitPaginationComponent } from './kit-pagination/kit-pagination.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitPaginationComponent,
  ],
  declarations: [
    KitPaginationComponent,
  ],
  providers: []
})
export class KitPaginationModule {
}
