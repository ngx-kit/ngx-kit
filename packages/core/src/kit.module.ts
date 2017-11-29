import { NgModule } from '@angular/core';
import { KitAnchorModule } from './kit-anchor/kit-anchor.module';
import { KitClassModule } from './kit-class/kit-class.module';
import { KitCollapseModule } from './kit-collapse/kit-collapse.module';
import { KitCommonModule } from './kit-common/kit-common.module';
import { KitDatetimeModule } from './kit-datetime/kit-datetime.module';
import { KitFocusManagerModule } from './kit-focus-manager/kit-focus-manager.module';
import { KitFormsModule } from './kit-forms/kit-forms.module';
import { KitGridModule } from './kit-grid/kit-grid.module';
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
    KitCommonModule,
    KitDatetimeModule,
    KitFocusManagerModule,
    KitFormsModule,
    KitGridModule,
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
    KitCommonModule,
    KitDatetimeModule,
    KitFocusManagerModule,
    KitFormsModule,
    KitGridModule,
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
