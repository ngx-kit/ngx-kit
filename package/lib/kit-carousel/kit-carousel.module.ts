import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideModule } from '@ngx-kit/ngx-kit';
import { KitCarouselSlideComponent } from './kit-carousel-slide/kit-carousel-slide.component';
import { KitCarouselComponent } from './kit-carousel/kit-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
  ],
  exports: [
    KitCarouselComponent,
    KitCarouselSlideComponent,
  ],
  declarations: [
    KitCarouselComponent,
    KitCarouselSlideComponent,
  ],
})
export class KitCarouselModule {
}
