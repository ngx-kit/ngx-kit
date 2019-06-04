import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoFormSubmitDirective } from './evo-form-submit/evo-form-submit.directive';
import { EvoFormControlDirective } from './evo-form-control/evo-form-control.directive';
import { EvoFormErrorDirective } from './evo-form-error/evo-form-error.directive';
import { EvoFormFieldComponent } from './evo-form-field/evo-form-field.component';
import { UiFormComponent } from './evo-form/ui-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UiFormComponent,
    EvoFormFieldComponent,
    EvoFormControlDirective,
    EvoFormErrorDirective,
    EvoFormSubmitDirective,
  ],
  exports: [
    UiFormComponent,
    EvoFormFieldComponent,
    EvoFormControlDirective,
    EvoFormErrorDirective,
    EvoFormSubmitDirective,
  ],
})
export class EvoFormModule {
}
