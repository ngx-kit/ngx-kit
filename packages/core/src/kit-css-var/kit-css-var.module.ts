import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCssVarDirective } from './kit-css-var.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitCssVarDirective,
  ],
  exports: [
    KitCssVarDirective,
  ],
})
export class KitCssVarModule {
}
