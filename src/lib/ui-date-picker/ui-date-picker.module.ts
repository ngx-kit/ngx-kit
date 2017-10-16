import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitAriaModule, KitCommonModule } from '@ngx-kit/ngx-kit';
import { UiDatePickerPopupComponent } from './ui-date-picker-popup/ui-date-picker-popup.component';
import { UiDatePickerComponent } from './ui-date-picker/ui-date-picker.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitAriaModule,
  ],
  exports: [
    UiDatePickerComponent,
    UiDatePickerPopupComponent,
  ],
  declarations: [
    UiDatePickerComponent,
    UiDatePickerPopupComponent,
  ],
})
export class UiDatePickerModule {
}
