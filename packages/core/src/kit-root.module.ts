import { NgModule } from '@angular/core';
import { KitEventManagerModule } from './kit-event-manager/kit-event-manager.module';
import { KitFocusManagerModule } from './kit-focus-manager/kit-focus-manager.module';
import { KitIconsModule } from './kit-icons/kit-icons.module';
import { KitLoadingBarModule } from './kit-loading-bar/kit-loading-bar.module';
import { KitModalModule } from './kit-modal/kit-modal.module';
import { KitNotificationModule } from './kit-notification/kit-notification.module';
import { KitOverlayModule } from './kit-overlay/kit-overlay.module';
import { KitPlatformModule } from './kit-platform/kit-platform.module';

@NgModule({
  imports: [
    KitFocusManagerModule.forRoot(),
    KitIconsModule.forRoot(),
    KitLoadingBarModule.forRoot(),
    KitNotificationModule.forRoot(),
    KitModalModule.forRoot(),
    KitOverlayModule.forRoot(),
    KitPlatformModule.forRoot(),
    KitEventManagerModule.forRoot(),
  ],
  exports: [],
})
export class KitRootModule {
}
