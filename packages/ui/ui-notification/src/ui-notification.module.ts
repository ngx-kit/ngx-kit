import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { KitClassModule, KitOverlayService } from '@ngx-kit/core';
import { UiNotificationHostComponent } from './ui-notification-host/ui-notification-host.component';

export function uiNotificationInitFactory(overlay: KitOverlayService) {
  const f = () => {
    // Host component in the overlay
    overlay.hostComponent({component: UiNotificationHostComponent});
  };
  return f;
}

@NgModule({
  imports: [
    CommonModule,
    KitClassModule,
  ],
  declarations: [
    UiNotificationHostComponent,
  ],
  entryComponents: [
    UiNotificationHostComponent,
  ],
})
export class UiNotificationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UiNotificationModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: uiNotificationInitFactory,
          deps: [KitOverlayService],
          multi: true,
        },
      ],
    };
  }
}
