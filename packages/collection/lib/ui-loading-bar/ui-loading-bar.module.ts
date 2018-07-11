import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { KitOverlayService } from '@ngx-kit/core';
import { UiLoadingBarComponent } from './ui-loading-bar/ui-loading-bar.component';

export function uiLoadingBarInitFactory(overlay: KitOverlayService) {
  return () => {
    // Host loading-bar component in the overlay
    overlay.hostComponent({component: UiLoadingBarComponent});
  };
}

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiLoadingBarComponent,
  ],
  exports: [
    UiLoadingBarComponent,
  ],
  entryComponents: [
    UiLoadingBarComponent,
  ],
})
export class UiLoadingBarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UiLoadingBarModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: uiLoadingBarInitFactory,
          deps: [KitOverlayService],
          multi: true,
        },
      ],
    };
  }
}
