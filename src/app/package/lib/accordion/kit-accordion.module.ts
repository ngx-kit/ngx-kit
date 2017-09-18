import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCollapseModule } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { KitAccordionPanelComponent } from './kit-accordion-panel/kit-accordion-panel.component';
import { KitAccordionComponent } from './kit-accordion/kit-accordion.component';

const exp = [
  KitAccordionComponent,
  KitAccordionPanelComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
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
