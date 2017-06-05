import { ModuleWithProviders, NgModule } from '@angular/core';

import { kitComponentButton, kitComponentDatePicker, kitComponentSelect, kitTheme } from '@ngx-kit/core';

import { KitDefaultThemeService } from './kit-default-theme.service';
import { KitDefaultButtonStyle } from './components/kit-default-button.style';
import { KitDefaultSelectStyle } from './components/kit-default-select.style';
import { KitDefaultDatePickerStyle } from './components/kit-default-date-picker.style';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class KitDefaultThemeModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitDefaultThemeModule,
      providers: [
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
