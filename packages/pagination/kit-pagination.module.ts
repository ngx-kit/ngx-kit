import { NgModule } from '@angular/core';

import { KitPaginationComponent } from './kit-pagination/kit-pagination.component';
import { KitPaginationService } from './kit-pagination.service';

@NgModule({
  imports: [],
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
