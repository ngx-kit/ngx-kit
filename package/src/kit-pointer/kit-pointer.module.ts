import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitPointerLineDirective } from './kit-pointer-line/kit-pointer-line.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitPointerLineDirective,
  ],
  declarations: [
    KitPointerLineDirective,
  ],
})
export class KitPointerModule {
}
