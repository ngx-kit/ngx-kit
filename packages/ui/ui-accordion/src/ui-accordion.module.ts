import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/core';
import { UiAccordionContentComponent } from './ui-accordion-content/ui-accordion-content.component';
import { UiAccordionPanelComponent } from './ui-accordion-panel/ui-accordion-panel.component';
import { UiAccordionTitleComponent } from './ui-accordion-title/ui-accordion-title.component';
import { UiAccordionComponent } from './ui-accordion/ui-accordion.component';

@NgModule({
  imports: [
    CommonModule,
    KitCollapseModule,
  ],
  declarations: [
    UiAccordionComponent,
    UiAccordionPanelComponent,
    UiAccordionTitleComponent,
    UiAccordionContentComponent,
  ],
  exports: [
    KitCollapseModule,
    UiAccordionComponent,
    UiAccordionPanelComponent,
    UiAccordionTitleComponent,
    UiAccordionContentComponent,
  ],
})
export class UiAccordionModule {
}
