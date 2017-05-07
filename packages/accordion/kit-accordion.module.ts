import { NgModule } from '@angular/core';

import { KitAccordionComponent } from './kit-accordion/kit-accordion.component';
import { KitAccordionService } from './kit-accordion.service';

@NgModule({
  imports: [],
  exports: [
    KitAccordionComponent,
  ],
  declarations: [
    KitAccordionComponent,
  ],
  providers: [
    KitAccordionService,
  ]
})
export class KitAccordionModule {
}
