import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitFocusDirective } from './kit-focus/kit-focus.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitFocusDirective,
  ],
  exports: [
    KitFocusDirective,
  ],
})
export class KitFocusManagerModule {
}
