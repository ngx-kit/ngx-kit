import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitInputDateModule } from '@ngx-kit/core';
import { UiDatePickerModule } from '../ui-date-picker.module';
import { UiDatePickerDemoComponent } from './ui-date-picker-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KitInputDateModule,
    UiDatePickerModule,
  ],
  declarations: [
    UiDatePickerDemoComponent,
  ],
  entryComponents: [
    UiDatePickerDemoComponent,
  ],
})
export class UiDatePickerDemoModule {
}
