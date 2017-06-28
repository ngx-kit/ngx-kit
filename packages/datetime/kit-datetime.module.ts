import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler/src/styler.module';
import { KitDatePickerComponent } from './kit-date-picker/kit-date-picker.component';

const exported = [
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
  providers: [],
})
export class KitDatetimeModule {
}
