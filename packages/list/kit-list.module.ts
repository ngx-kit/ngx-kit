import { NgModule } from '@angular/core';

import { KitListComponent } from './kit-list/kit-list.component';
import { KitListService } from './kit-list.service';

@NgModule({
  imports: [],
  exports: [
    KitListComponent,
  ],
  declarations: [
    KitListComponent,
  ],
  providers: [
    KitListService,
  ]
})
export class KitListModule {
}
