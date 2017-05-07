import { NgModule } from '@angular/core';

import { KitNavComponent } from './kit-nav/kit-nav.component';
import { KitNavService } from './kit-nav.service';

@NgModule({
  imports: [],
  exports: [
    KitNavComponent,
  ],
  declarations: [
    KitNavComponent,
  ],
  providers: [
    KitNavService,
  ]
})
export class KitNavModule {
}
