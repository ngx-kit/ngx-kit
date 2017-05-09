import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitPaginationComponent } from './kit-pagination/kit-pagination.component';
import { KitPaginationService } from './kit-pagination.service';

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
  providers: [
    KitPaginationService,
  ]
})
export class KitPaginationModule {
}
