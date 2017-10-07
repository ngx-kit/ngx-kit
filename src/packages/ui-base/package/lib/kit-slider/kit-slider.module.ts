import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitPointerModule } from '@ngx-kit/ngx-kit';
import { KitSliderComponent } from './kit-slider/kit-slider.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitPointerModule,
  ],
  exports: [
    KitSliderComponent,
  ],
  declarations: [
    KitSliderComponent,
  ],
  providers: [],
})
export class KitSliderModule {
}
