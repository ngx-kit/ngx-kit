import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { EvoLoadingBarComponent } from './evo-loading-bar.component';

export function uiLoadingBarInitFactory(overlay: Overlay) {
  const f = () => {
    const overlayRef = overlay.create();
    const portal = new ComponentPortal(EvoLoadingBarComponent);
    overlayRef.attach(portal);
  };
  return f;
}

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
  ],
  declarations: [
    EvoLoadingBarComponent,
  ],
  exports: [
    EvoLoadingBarComponent,
  ],
  entryComponents: [
    EvoLoadingBarComponent,
  ],
})
export class EvoLoadingBarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EvoLoadingBarModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: uiLoadingBarInitFactory,
          deps: [Overlay],
          multi: true,
        },
      ],
    };
  }
}
