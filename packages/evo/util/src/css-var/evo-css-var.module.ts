import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoCssVarDirective } from './evo-css-var.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EvoCssVarDirective,
  ],
  exports: [
    EvoCssVarDirective,
  ],
})
export class EvoCssVarModule {
}
