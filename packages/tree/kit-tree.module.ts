import { NgModule } from '@angular/core';

import { KitTreeComponent } from './kit-tree/kit-tree.component';
import { KitTreeService } from './kit-tree.service';

@NgModule({
  imports: [],
  exports: [
    KitTreeComponent,
  ],
  declarations: [
    KitTreeComponent,
  ],
  providers: [
    KitTreeService,
  ]
})
export class KitTreeModule {
}
