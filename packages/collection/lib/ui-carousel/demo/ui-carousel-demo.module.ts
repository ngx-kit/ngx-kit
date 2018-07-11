import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiCarouselModule } from '../ui-carousel.module';
import { UiCarouselDemoComponent } from './ui-carousel-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiCarouselModule,
  ],
  declarations: [
    UiCarouselDemoComponent,
  ],
  entryComponents: [
    UiCarouselDemoComponent,
  ],
})
export class UiCarouselDemoModule {
}
