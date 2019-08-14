import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControlDirective } from './form-control/form-control.directive';
import { FormErrorDirective } from './form-error/form-error.directive';
import { FormSubmitDirective } from './form-submit/form-submit.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    FormControlDirective,
    FormErrorDirective,
    FormSubmitDirective,
  ],
  exports: [
    FormControlDirective,
    FormErrorDirective,
    FormSubmitDirective,
  ],
})
export class FormModule {
}
