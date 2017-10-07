import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitPointerModule } from '@ngx-kit/ngx-kit';
import { KitSliderComponent } from './kit-slider/kit-slider.component';

const exp = [
  KitSliderComponent,
];

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitPointerModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitSliderModule {
}
