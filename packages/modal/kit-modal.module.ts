import { NgModule } from '@angular/core';

import { KitModalComponent } from './kit-modal/kit-modal.component';
import { KitModalService } from './kit-modal.service';

@NgModule({
  imports: [],
  exports: [
    KitModalComponent,
  ],
  declarations: [
    KitModalComponent,
  ],
  providers: [
    KitModalService,
  ]
})
export class KitModalModule {
}
