import { NgModule } from '@angular/core';

import { KitListComponent } from './kit-list/kit-list.component';
import { KitTreeComponent } from './kit-tree/kit-tree.component';

const exported = [
  KitListComponent,
  KitTreeComponent,
];

@NgModule({
  imports: [],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: []
})
export class KitListsModule {
}
