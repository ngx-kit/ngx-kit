import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitPointerModule } from '@ngx-kit/core';
import { UiSliderComponent } from './ui-slider/ui-slider.component';

@NgModule({
  imports: [
    CommonModule,
    KitPointerModule,
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
