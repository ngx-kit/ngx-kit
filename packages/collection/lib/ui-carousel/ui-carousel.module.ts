import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideModule } from '@ngx-kit/core';
import 'hammerjs';
import { UiCarouselSlideComponent } from './ui-carousel-slide/ui-carousel-slide.component';
import { UiCarouselComponent } from './ui-carousel/ui-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
  ],
  declarations: [
    UiCarouselComponent,
    UiCarouselSlideComponent,
  ],
  exports: [
    KitSlideModule,
    UiCarouselComponent,
    UiCarouselSlideComponent,
  ],
})
export class UiCarouselModule {
}
