import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiTooltipModule } from '../ui-tooltip.module';
import { UiTooltipDemoComponent } from './ui-tooltip-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiTooltipModule,
  ],
  declarations: [
    UiTooltipDemoComponent,
  ],
  entryComponents: [
    UiTooltipDemoComponent,
  ],
})
export class UiTooltipDemoModule {
}
