import { NgModule } from '@angular/core';
import { KitCollapseModule } from './kit-collapse/kit-collapse.module';
import { KitCommonModule } from './kit-common/kit-common.module';
import { KitDatetimeModule } from './kit-datetime/kit-datetime.module';
import { KitEventManagerModule } from './kit-event-manager/kit-event-manager.module';
import { KitFocusManagerModule } from './kit-focus-manager/kit-focus-manager.module';
import { KitFormsModule } from './kit-forms/kit-forms.module';
import { KitGridModule } from './kit-grid/kit-grid.module';
import { KitIconsModule } from './kit-icons/kit-icons.module';
import { KitLoadingBarModule } from './kit-loading-bar/kit-loading-bar.module';
import { KitNotificationModule } from './kit-notification/kit-notification.module';
import { KitOverlayModule } from './kit-overlay/kit-overlay.module';
import { KitPlatformModule } from './kit-platform/kit-platform.module';
import { KitPointerModule } from './kit-pointer/kit-pointer.module';
import { KitSlideModule } from './kit-slide/kit-slide.module';

const initableModules = [
  KitPlatformModule,
  KitIconsModule,
  KitLoadingBarModule,
  KitNotificationModule,
  KitOverlayModule,
];
const simpleModules = [
  KitCollapseModule,
  KitCommonModule,
  KitDatetimeModule,
  KitEventManagerModule,
  KitFocusManagerModule,
  KitFormsModule,
  KitGridModule,
  KitPointerModule,
  KitSlideModule,
];

@NgModule({
  imports: [
    KitPlatformModule.forRoot(),
    KitIconsModule.forRoot(),
    KitLoadingBarModule.forRoot(),
    KitNotificationModule.forRoot(),
    KitOverlayModule.forRoot(),
    ...simpleModules,
  ],
  exports: [
    ...initableModules,
    ...simpleModules,
  ],
})
export class KitFullForRootModule {
}

@NgModule({
  imports: [
    ...initableModules,
    ...simpleModules,
  ],
  declarations: [],
  providers: [],
  exports: [
    ...initableModules,
    ...simpleModules,
  ],
})
export class KitFullModule {
}
