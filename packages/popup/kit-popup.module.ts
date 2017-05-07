import { NgModule } from '@angular/core';

import { KitPopupComponent } from './kit-popup/kit-popup.component';
import { KitPopupService } from './kit-popup.service';

@NgModule({
  imports: [],
  exports: [
    KitPopupComponent,
  ],
  declarations: [
    KitPopupComponent,
  ],
  providers: [
    KitPopupService,
  ]
})
export class KitPopupModule {
}
