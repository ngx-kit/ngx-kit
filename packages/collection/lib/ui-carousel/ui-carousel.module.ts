import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideModule } from '@ngx-kit/core';
import { UiCarouselSlideComponent } from './ui-carousel-slide/ui-carousel-slide.component';
import { UiCarouselComponent } from './ui-carousel/ui-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
  ],
  exports: [
    UiCarouselComponent,
    UiCarouselSlideComponent,
  ],
  declarations: [
    UiCarouselComponent,
    UiCarouselSlideComponent,
  ],
})
export class UiCarouselModule {
}
