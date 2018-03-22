import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitValueAccessorDirective } from './kit-value-accessor.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitValueAccessorDirective,
  ],
  exports: [
    KitValueAccessorDirective,
  ],
})
export class KitValueAccessorModule {
}
