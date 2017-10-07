import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/ngx-kit';
import { KitAccordionContentComponent } from './kit-accordion-content/kit-accordion-content.component';
import { KitAccordionPanelComponent } from './kit-accordion-panel/kit-accordion-panel.component';
import { KitAccordionTitleComponent } from './kit-accordion-title/kit-accordion-title.component';
import { KitAccordionComponent } from './kit-accordion/kit-accordion.component';

const exp = [
  KitAccordionComponent,
  KitAccordionPanelComponent,
  KitAccordionTitleComponent,
  KitAccordionContentComponent,
];

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitAccordionModule {
}
