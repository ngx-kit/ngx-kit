import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StylerModule } from '@ngx-kit/styler';

import { KitDatePickerComponent } from './kit-date-picker/kit-date-picker.component';
import { KitFormErrorComponent } from './kit-form-error/kit-form-error.component';
import { KitFormGroupComponent } from './kit-form-group/kit-form-group.component';
import { KitFormLabelComponent } from './kit-form-label/kit-form-label.component';
import { KitInputComponent } from './kit-input/kit-input.component';
import { KitSelectComponent } from './kit-select/kit-select.component';

const exported = [
  KitDatePickerComponent,
  KitFormErrorComponent,
  KitFormGroupComponent,
  KitFormLabelComponent,
  KitInputComponent,
  KitSelectComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    FormsModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: []
})
export class KitFormsModule {
}
