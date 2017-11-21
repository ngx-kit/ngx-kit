import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitPlatformService } from './kit-platform.service';

@NgModule({})
export class KitBrowserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitBrowserModule,
      providers: [
        KitPlatformService,
      ],
    };
  }
}
