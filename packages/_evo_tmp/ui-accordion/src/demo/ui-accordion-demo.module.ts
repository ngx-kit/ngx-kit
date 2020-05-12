import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiAccordionModule } from '../ui-accordion/ui-accordion.component';
import { UiAccordionDemoComponent } from './ui-accordion-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiAccordionModule,
  ],
  declarations: [
    UiAccordionDemoComponent,
  ],
  entryComponents: [
    UiAccordionDemoComponent,
  ],
})
export class UiAccordionDemoModule {
}
