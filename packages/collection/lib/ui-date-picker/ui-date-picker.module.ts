import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  KitAnchorModule,
  KitClassModule,
  KitFocusManagerModule,
  KitKeymapModule,
  KitOutsideClickModule,
  KitOverlayModule,
} from '@ngx-kit/core';
import { UiDatePickerPopupComponent } from './ui-date-picker-popup/ui-date-picker-popup.component';
import { UiDatePickerComponent } from './ui-date-picker/ui-date-picker.component';

@NgModule({
  imports: [
    CommonModule,
    KitKeymapModule,
    KitFocusManagerModule,
    KitClassModule,
  ],
  declarations: [
    UiDatePickerComponent,
    UiDatePickerPopupComponent,
  ],
  exports: [
    KitAnchorModule,
    KitOutsideClickModule,
    KitOverlayModule,
    UiDatePickerComponent,
    UiDatePickerPopupComponent,
  ],
})
export class UiDatePickerModule {
}
