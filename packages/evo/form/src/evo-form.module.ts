import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  exports: [
    UiFormComponent,
    EvoFormFieldComponent,
    EvoFormControlDirective,
    EvoFormErrorDirective,
  ],
})
export class EvoFormModule {
}
