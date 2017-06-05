import { ModuleWithProviders, NgModule } from '@angular/core';

import { KitCoreService } from './kit-core.service';
import { KitHostService } from './kit-host.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class KitCoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitCoreModule,
      providers: [
        KitCoreService,
        KitHostService,
      ]
    }
  }

}
