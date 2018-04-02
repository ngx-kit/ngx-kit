import { NgModule } from '@angular/core';
import { KitAnchorModule } from './kit-anchor/kit-anchor.module';
import { KitCheckModule } from './kit-check/kit-check.module';
import { KitClassModule } from './kit-class/kit-class.module';
import { KitCollapseModule } from './kit-collapse/kit-collapse.module';
import { KitDatePickerModule } from './kit-date-picker/kit-date-picker.module';
import { KitFocusManagerModule } from './kit-focus-manager/kit-focus-manager.module';
import { KitFormFieldModule } from './kit-form-field/kit-form-field.module';
import { KitFormTouchModule } from './kit-form-touch/kit-form-touch.module';
import { KitIconsModule } from './kit-icons/kit-icons.module';
import { KitModalModule } from './kit-modal/kit-modal.module';
import { KitOutsideClickModule } from './kit-outside-click/kit-outside-click.module';
import { KitOverlayModule } from './kit-overlay/kit-overlay.module';
import { KitPointerModule } from './kit-pointer/kit-pointer.module';
import { KitRefModule } from './kit-ref/kit-ref.module';
import { KitRepeatModule } from './kit-repeat/kit-repeat.module';
import { KitSlideModule } from './kit-slide/kit-slide.module';
import { KitValueAccessorModule } from './kit-value-accessor/kit-value-accessor.module';

@NgModule({
  imports: [
    KitAnchorModule,
    KitClassModule,
    KitCollapseModule,
    KitDatePickerModule,
    KitFocusManagerModule,
    KitCheckModule,
    KitFormFieldModule,
    KitFormTouchModule,
    KitIconsModule,
    KitModalModule,
    KitOutsideClickModule,
    KitOverlayModule,
    KitPointerModule,
    KitRefModule,
    KitRepeatModule,
    KitSlideModule,
    KitValueAccessorModule,
  ],
  exports: [
    KitAnchorModule,
    KitClassModule,
    KitCollapseModule,
    KitDatePickerModule,
    KitFocusManagerModule,
    KitCheckModule,
    KitFormFieldModule,
    KitFormTouchModule,
    KitIconsModule,
    KitModalModule,
    KitOutsideClickModule,
    KitOverlayModule,
    KitPointerModule,
    KitRefModule,
    KitRepeatModule,
    KitSlideModule,
    KitValueAccessorModule,
  ],
})
export class KitModule {
}
