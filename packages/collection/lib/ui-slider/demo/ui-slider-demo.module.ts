import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiSliderModule } from '../ui-slider.module';
import { UiSliderDemoComponent } from './ui-slider-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiSliderModule,
  ],
  declarations: [
    UiSliderDemoComponent,
  ],
})
export class UiSliderDemoModule {
}
