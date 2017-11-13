import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitGlobalListenerService } from './kit-global-listener.service';
import { KitPlatformService } from './kit-platform.service';

@NgModule({})
export class KitBrowserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitBrowserModule,
      providers: [
        KitPlatformService,
        KitGlobalListenerService,
      ],
    };
  }
}
