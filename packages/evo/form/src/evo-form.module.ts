import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoFormControlDirective } from './form-control/evo-form-control.directive';
import { EvoFormErrorDirective } from './form-error/evo-form-error.directive';
import { EvoFormSubmitDirective } from './form-submit/evo-form-submit.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EvoFormControlDirective,
    EvoFormErrorDirective,
    EvoFormSubmitDirective,
  ],
  exports: [
    EvoFormControlDirective,
    EvoFormErrorDirective,
    EvoFormSubmitDirective,
  ],
})
export class EvoFormModule {
}
