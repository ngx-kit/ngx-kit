import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitAriaFocusGridDirective } from './kit-aria-focus-grid/kit-aria-focus-grid.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitAriaFocusGridDirective,
  ],
  exports: [
    KitAriaFocusGridDirective,
  ],
})
export class KitAriaModule {
}
