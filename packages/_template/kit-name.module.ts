import { NgModule } from '@angular/core';

import { KitNameComponent } from './kit-name/kit-name.component';
import { KitNameService } from './kit-name.service';

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
