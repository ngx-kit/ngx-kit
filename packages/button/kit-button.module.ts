import { NgModule } from '@angular/core';

import { KitButtonService } from './kit-button.service';
import { KitButtonComponent } from './kit-button/kit-button.component';

@NgModule({
  imports: [],
  exports: [
    KitButtonComponent,
  ],
  declarations: [
    KitButtonComponent,
  ],
  providers: [
    KitButtonService,
  ]
})
export class KitButtonModule {
}
