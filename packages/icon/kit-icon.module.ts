import { NgModule } from '@angular/core';

import { KitIconComponent } from './kit-icon/kit-icon.component';
import { KitIconService } from './kit-icon.service';

@NgModule({
  imports: [],
  exports: [
    KitIconComponent,
  ],
  declarations: [
    KitIconComponent,
  ],
  providers: [
    KitIconService,
  ]
})
export class KitIconModule {
}
