import { NgModule } from '@angular/core';

import { KitNameComponent } from './kit-divider/kit-divider.component';
import { KitNameService } from './kit-divider.service';

@NgModule({
  imports: [],
  exports: [
    KitNameComponent,
  ],
  declarations: [
    KitNameComponent,
  ],
  providers: [
    KitNameService,
  ]
})
export class KitNameModule {
}
