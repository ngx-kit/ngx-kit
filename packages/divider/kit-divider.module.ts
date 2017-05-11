import { NgModule } from '@angular/core';

import { KitDividerComponent } from './kit-divider/kit-divider.component';
import { KitDividerService } from './kit-divider.service';

@NgModule({
  imports: [],
  exports: [
    KitDividerComponent,
  ],
  declarations: [
    KitDividerComponent,
  ],
  providers: [
    KitDividerService,
  ]
})
export class KitDividerModule {
}
