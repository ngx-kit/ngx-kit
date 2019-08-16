import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoCheckDirective } from './evo-check.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    EvoCheckDirective,
  ],
  declarations: [
    EvoCheckDirective,
  ],
})
export class EvoCheckModule {
}
