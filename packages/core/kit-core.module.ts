import { ModuleWithProviders, NgModule } from '@angular/core';

import { KitCoreService } from './kit-core.service';
import { KitHostService } from './kit-host.service';
import { KitTheme } from './tokens';
import { KitDefaultThemeService } from './default-theme/kit-default-theme.service';

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
        {
          provide: KitTheme,
          useClass: KitDefaultThemeService,
        }
      ]
    }
  }

}
