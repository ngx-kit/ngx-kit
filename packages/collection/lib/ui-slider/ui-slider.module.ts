import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitPointerModule } from '@ngx-kit/ngx-kit';
import { UiSliderComponent } from './ui-slider/ui-slider.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitPointerModule,
  ],
  exports: [
    UiSliderComponent,
  ],
  declarations: [
    UiSliderComponent,
  ],
  providers: [],
})
export class UiSliderModule {
}
