import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitEventManagerService } from './kit-event-manager.service';

@NgModule({})
export class KitEventManagerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitEventManagerModule,
      providers: [
        KitEventManagerService,
      ],
    };
  }
}
