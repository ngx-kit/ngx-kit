import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiSliderComponent } from './ui-slider/ui-slider.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiSliderComponent,
  ],
  exports: [
    UiSliderComponent,
  ],
})
export class UiSliderModule {
}
