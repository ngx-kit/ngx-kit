import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { EvoClassModule } from '@ngx-kit/evo/class';
import { EvoNotificationHostComponent } from './evo-notification-host/evo-notification-host.component';

export function uiNotificationInitFactory(overlay: Overlay) {
  const f = () => {
    const overlayRef = overlay.create();
    const portal = new ComponentPortal(EvoNotificationHostComponent);
    overlayRef.attach(portal);
  };
  return f;
}

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    EvoClassModule,
  ],
  declarations: [
    EvoNotificationHostComponent,
  ],
  entryComponents: [
    EvoNotificationHostComponent,
  ],
})
export class EvoNotificationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EvoNotificationModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: uiNotificationInitFactory,
          deps: [Overlay],
          multi: true,
        },
      ],
    };
  }
}
