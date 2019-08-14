import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormModule as EvoFormModule } from '@ngx-kit/evo/form';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FormComponent,
    FormFieldComponent,
  ],
  exports: [
    FormComponent,
    FormFieldComponent,
    EvoFormModule,
  ],
})
export class FormModule {
}
