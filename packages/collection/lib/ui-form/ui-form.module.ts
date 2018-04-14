import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitFormFieldModule } from '@ngx-kit/core';
import { UiFormFieldComponent } from './ui-form-field/ui-form-field.component';
import { UiFormComponent } from './ui-form/ui-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KitFormFieldModule,
  ],
  declarations: [
    UiFormComponent,
    UiFormFieldComponent,
  ],
  exports: [
    KitFormFieldModule,
    UiFormComponent,
    UiFormFieldComponent,
  ],
})
export class UiFormModule {
}
