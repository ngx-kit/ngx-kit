import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitAriaGridCellDirective } from './kit-aria-grid/kit-aria-grid-cell.directive';
import { KitAriaGridDirective } from './kit-aria-grid/kit-aria-grid.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitAriaGridDirective,
    KitAriaGridCellDirective,
  ],
  exports: [
    KitAriaGridDirective,
    KitAriaGridCellDirective,
  ],
})
export class KitAriaModule {
}
