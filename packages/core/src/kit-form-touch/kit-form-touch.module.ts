import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitFormTouchDirective } from './kit-form-touch/kit-form-touch.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitFormTouchDirective,
  ],
  exports: [
    KitFormTouchDirective,
  ],
  providers: [],
})
export class KitFormTouchModule {
}
