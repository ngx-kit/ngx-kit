import { NgModule } from '@angular/core';
import { KitAnchorModule } from './kit-anchor/kit-anchor.module';
import { KitClassModule } from './kit-class/kit-class.module';
import { KitCollapseModule } from './kit-collapse/kit-collapse.module';
import { KitDatePickerModule } from './kit-date-picker/kit-date-picker.module';
import { KitFocusManagerModule } from './kit-focus-manager/kit-focus-manager.module';
import { KitCheckModule } from './kit-check/kit-check.module';
import { KitKeymapModule } from './kit-keymap/kit-keymap.module';
import { KitIconsModule } from './kit-icons/kit-icons.module';
import { KitOutsideClickModule } from './kit-outside-click/kit-outside-click.module';
import { KitOverlayModule } from './kit-overlay/kit-overlay.module';
import { KitPointerModule } from './kit-pointer/kit-pointer.module';
import { KitRepeatModule } from './kit-repeat/kit-repeat.module';
import { KitSlideModule } from './kit-slide/kit-slide.module';

@NgModule({
  imports: [
    KitAnchorModule,
    KitClassModule,
    KitCollapseModule,
    KitDatePickerModule,
    KitFocusManagerModule,
    KitCheckModule,
    KitKeymapModule,
    KitIconsModule,
    KitOutsideClickModule,
    KitOverlayModule,
    KitPointerModule,
    KitRepeatModule,
    KitSlideModule,
  ],
  exports: [
    KitAnchorModule,
    KitClassModule,
    KitCollapseModule,
    KitDatePickerModule,
    KitFocusManagerModule,
    KitCheckModule,
    KitKeymapModule,
    KitIconsModule,
    KitOutsideClickModule,
    KitOverlayModule,
    KitPointerModule,
    KitRepeatModule,
    KitSlideModule,
  ],
})
export class KitModule {
}
