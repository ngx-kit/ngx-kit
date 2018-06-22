import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  KitAnchorModule,
  KitClassModule,
  KitFocusManagerModule,
  KitOutsideClickModule,
  KitOverlayModule,
  KitPositionModule,
} from '@ngx-kit/core';
import { UiDatePickerPopupComponent } from './ui-date-picker-popup/ui-date-picker-popup.component';
import { UiDatePickerComponent } from './ui-date-picker/ui-date-picker.component';

@NgModule({
  imports: [
    CommonModule,
    KitFocusManagerModule,
    KitClassModule,
    KitPositionModule,
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
