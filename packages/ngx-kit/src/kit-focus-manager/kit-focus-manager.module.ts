import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitFocusDirective } from './kit-focus/kit-focus.directive';
import { KitGridControlDirective } from '../kit-grid/kit-grid-control/kit-grid-control.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitGridControlDirective,
    KitFocusDirective,
  ],
  exports: [
    KitGridControlDirective,
    KitFocusDirective,
  ],
})
export class KitFocusManagerModule {
}
