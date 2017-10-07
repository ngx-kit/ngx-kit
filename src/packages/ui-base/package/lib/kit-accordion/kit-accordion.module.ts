import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/ngx-kit';
import { KitAccordionContentComponent } from './kit-accordion-content/kit-accordion-content.component';
import { KitAccordionPanelComponent } from './kit-accordion-panel/kit-accordion-panel.component';
import { KitAccordionTitleComponent } from './kit-accordion-title/kit-accordion-title.component';
import { KitAccordionComponent } from './kit-accordion/kit-accordion.component';

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
  ],
  exports: [
    KitAccordionComponent,
    KitAccordionPanelComponent,
    KitAccordionTitleComponent,
    KitAccordionContentComponent,
  ],
  declarations: [
    KitAccordionComponent,
    KitAccordionPanelComponent,
    KitAccordionTitleComponent,
    KitAccordionContentComponent,
  ],
})
export class KitAccordionModule {
}
