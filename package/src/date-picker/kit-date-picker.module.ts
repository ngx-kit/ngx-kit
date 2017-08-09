import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitDatePickerComponent } from './kit-date-picker.component';

const exports = [
  KitDatePickerComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
  ],
  exports: [
    ...exports,
  ],
  declarations: [
    ...exports,
  ],
  providers: [],
})
export class KitDatePickerModule {
}
