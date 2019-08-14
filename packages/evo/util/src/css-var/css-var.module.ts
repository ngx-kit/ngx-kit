import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CssVarDirective } from './css-var.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CssVarDirective,
  ],
  exports: [
    CssVarDirective,
  ],
})
export class CssVarModule {
}
