import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiAccordionModule } from '../ui-accordion.module';
import { UiAccordionDemoComponent } from './ui-accordion-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiAccordionModule,
  ],
  declarations: [
    UiAccordionDemoComponent,
  ],
})
export class UiAccordionDemoModule {
}
