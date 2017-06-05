import { ModuleWithProviders, NgModule } from '@angular/core';

import { KitCoreService } from './kit-core.service';
import { KitHostService } from './kit-host.service';
import { KitDefaultThemeService } from './default-theme/kit-default-theme.service';
import { kitComponentButton, kitComponentSelect, kitTheme, kitComponentDatePicker } from './meta/tokens';
import { KitDefaultButtonStyle } from './default-theme/components/kit-default-button.style';
import { KitDefaultSelectStyle } from './default-theme/components/kit-default-select.style';
import { KitDefaultDatePickerStyle } from './default-theme/components/kit-default-date-picker.style';

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
          provide: kitTheme,
          useClass: KitDefaultThemeService,
        },
        // general
        {
          provide: kitComponentButton,
          useClass: KitDefaultButtonStyle,
        },
        // forms
        {
          provide: kitComponentSelect,
          useClass: KitDefaultSelectStyle,
        },
        {
          provide: kitComponentDatePicker,
          useClass: KitDefaultDatePickerStyle,
        },
      ]
    }
  }

}
