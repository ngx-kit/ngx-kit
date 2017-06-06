import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitAccordionComponent } from './kit-accordion/kit-accordion.component';
import { KitAccordionPanelComponent } from './kit-accordion-panel/kit-accordion-panel.component';
import { KitTabsComponent } from './kit-tabs/kit-tabs.component';
import { KitTabsPanelComponent } from './kit-tabs-panel/kit-tabs-panel.component';

const external = [
  KitTabsComponent,
  KitTabsPanelComponent,
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
  providers: []
})
export class KitPanelsModule {
}
