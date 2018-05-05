import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitFocusTrapDirective } from './kit-focus-trap/kit-focus-trap.directive';
import { KitFocusDirective } from './kit-focus/kit-focus.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitFocusDirective,
    KitFocusTrapDirective,
  ],
  exports: [
    KitFocusDirective,
    KitFocusTrapDirective,
  ],
})
export class KitFocusManagerModule {
}
