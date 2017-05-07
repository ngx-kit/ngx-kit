import { NgModule } from '@angular/core';

import { KitGridComponent } from './kit-grid/kit-grid.component';
import { KitGridService } from './kit-grid.service';

@NgModule({
  imports: [],
  exports: [
    KitGridComponent,
  ],
  declarations: [
    KitGridComponent,
  ],
  providers: [
    KitGridService,
  ]
})
export class KitGridModule {
}
