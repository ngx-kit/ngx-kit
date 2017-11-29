import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule, KitFocusManagerModule, KitGridModule, KitOverlayModule } from '@ngx-kit/core';
import { UiDatePickerPopupComponent } from './ui-date-picker-popup/ui-date-picker-popup.component';
import { UiDatePickerComponent } from './ui-date-picker/ui-date-picker.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
    KitGridModule,
    KitFocusManagerModule,
  ],
  declarations: [
    UiDatePickerComponent,
    UiDatePickerPopupComponent,
  ],
  exports: [
    KitCommonModule,
    KitOverlayModule,
    UiDatePickerComponent,
    UiDatePickerPopupComponent,
  ],
})
export class UiDatePickerModule {
}
