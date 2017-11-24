import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitPlatformService } from './kit-platform.service';

@NgModule({})
export class KitPlatformModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitPlatformModule,
      providers: [
        KitPlatformService,
      ],
    };
  }
}
