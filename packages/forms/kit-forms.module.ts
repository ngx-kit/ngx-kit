import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylerModule } from '@ngx-kit/styler';

import { KitSelectComponent } from './kit-select/kit-select.component';
import { KitDatePickerComponent } from './kit-date-picker/kit-date-picker.component';

const exported = [
  KitSelectComponent,
  KitDatePickerComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
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
