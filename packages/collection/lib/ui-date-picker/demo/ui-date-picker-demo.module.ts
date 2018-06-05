import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiDatePickerModule } from '../ui-date-picker.module';
import { UiDatePickerDemoComponent } from './ui-date-picker-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiDatePickerModule,
  ],
  declarations: [
    UiDatePickerDemoComponent,
  ],
})
export class UiDatePickerDemoModule {
}
