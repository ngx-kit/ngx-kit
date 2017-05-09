import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitAccordionComponent } from './kit-accordion/kit-accordion.component';
import { KitAccordionPanelComponent } from './kit-accordion-panel/kit-accordion-panel.component';
import { KitAccordionService } from './kit-accordion.service';

const external = [
  KitAccordionComponent,
  KitAccordionPanelComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: external,
  declarations: [
    ...external,
  ],
  providers: [
    KitAccordionService,
  ]
})
export class KitAccordionModule {
}
