import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideDirective } from './kit-slide/kit-slide.directive';

const exp = [
  KitSlideDirective,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  entryComponents: [],
  providers: [],
})
export class KitSlideModule {
}
