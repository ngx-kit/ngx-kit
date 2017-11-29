import { NgModule } from '@angular/core';
import { KitCollapseModule } from './kit-collapse/kit-collapse.module';
import { KitCommonModule } from './kit-common/kit-common.module';
import { KitDatetimeModule } from './kit-datetime/kit-datetime.module';
import { KitEventManagerModule } from './kit-event-manager/kit-event-manager.module';
import { KitFocusManagerModule } from './kit-focus-manager/kit-focus-manager.module';
import { KitFormsModule } from './kit-forms/kit-forms.module';
import { KitGridModule } from './kit-grid/kit-grid.module';
import { KitIconsModule } from './kit-icons/kit-icons.module';
import { KitOverlayModule } from './kit-overlay/kit-overlay.module';
import { KitPointerModule } from './kit-pointer/kit-pointer.module';
import { KitSlideModule } from './kit-slide/kit-slide.module';

@NgModule({
  imports: [
    KitCollapseModule,
    KitCommonModule,
    KitDatetimeModule,
    KitEventManagerModule,
    KitFocusManagerModule,
    KitFormsModule,
    KitGridModule,
    KitIconsModule,
    KitOverlayModule,
    KitPointerModule,
    KitSlideModule,
  ],
  exports: [
    KitCollapseModule,
    KitCommonModule,
    KitDatetimeModule,
    KitEventManagerModule,
    KitFocusManagerModule,
    KitFormsModule,
    KitGridModule,
    KitIconsModule,
    KitOverlayModule,
    KitPointerModule,
    KitSlideModule,
  ],
})
export class KitModule {
}
