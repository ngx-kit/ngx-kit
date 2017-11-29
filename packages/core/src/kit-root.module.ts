import { NgModule } from '@angular/core';
import { KitIconsModule } from './kit-icons/kit-icons.module';
import { KitLoadingBarModule } from './kit-loading-bar/kit-loading-bar.module';
import { KitNotificationModule } from './kit-notification/kit-notification.module';
import { KitOverlayModule } from './kit-overlay/kit-overlay.module';
import { KitPlatformModule } from './kit-platform/kit-platform.module';

@NgModule({
  imports: [
    KitIconsModule.forRoot(),
    KitLoadingBarModule.forRoot(),
    KitNotificationModule.forRoot(),
    KitOverlayModule.forRoot(),
    KitPlatformModule.forRoot(),
  ],
  exports: [],
})
export class KitRootModule {
}
