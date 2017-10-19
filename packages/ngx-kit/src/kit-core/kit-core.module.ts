import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitPlatformService } from './kit-platform.service';

@NgModule({})
export class KitCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitCoreModule,
      providers: [KitPlatformService],
    };
  }
}
