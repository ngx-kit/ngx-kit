import { NgModule } from '@angular/core';

import { KitDropdownComponent } from './kit-dropdown/kit-dropdown.component';
import { KitDropdownService } from './kit-dropdown.service';

@NgModule({
  imports: [],
  exports: [
    KitDropdownComponent,
  ],
  declarations: [
    KitDropdownComponent,
  ],
  providers: [
    KitDropdownService,
  ]
})
export class KitDropdownModule {
}
