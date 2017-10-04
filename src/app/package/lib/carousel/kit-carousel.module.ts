import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideModule } from '@ngx-kit/ngx-kit';
import { KitCarouselSlideComponent } from './kit-carousel-slide/kit-carousel-slide.component';
import { KitCarouselComponent } from './kit-carousel/kit-carousel.component';

const exp = [
  KitCarouselComponent,
  KitCarouselSlideComponent,
];

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitCarouselModule {
}
