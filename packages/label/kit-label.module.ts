import { NgModule } from '@angular/core';

import { KitLabelComponent } from './kit-label/kit-label.component';
import { KitLabelService } from './kit-label.service';

@NgModule({
  imports: [],
  exports: [
    KitLabelComponent,
  ],
  declarations: [
    KitLabelComponent,
  ],
  providers: [
    KitLabelService,
  ]
})
export class KitLabelModule {
}
