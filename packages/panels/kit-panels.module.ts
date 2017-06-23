import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylerModule } from '@ngx-kit/styler';

import { KitAccordionComponent } from './kit-accordion/kit-accordion.component';
import { KitAccordionPanelComponent } from './kit-accordion/kit-accordion-panel.component';
import { KitTabsComponent } from './kit-tabs/kit-tabs.component';
import { KitTabsPanelComponent } from './kit-tabs/kit-tabs-panel.component';

const exported = [
  KitTabsComponent,
  KitTabsPanelComponent,
  KitAccordionComponent,
  KitAccordionPanelComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: []
})
export class KitPanelsModule {
}
