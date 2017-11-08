import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitGlobalListenerService } from './kit-global-listener.service';
import { KitPlatformService } from './kit-platform.service';

@NgModule({})
export class KitCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitCoreModule,
      providers: [
        KitPlatformService,
        KitGlobalListenerService,
      ],
    };
  }
}
