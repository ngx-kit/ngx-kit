import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideDirective } from './kit-slide/kit-slide.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitSlideDirective,
  ],
  declarations: [
    KitSlideDirective,
  ],
})
export class KitSlideModule {
}
