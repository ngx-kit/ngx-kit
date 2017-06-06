import { ModuleWithProviders, NgModule } from '@angular/core';

import {
  kitComponentButton, kitComponentDatePicker, kitComponentInput, kitComponentSelect,
  kitTheme
} from '@ngx-kit/core';

import { KitDefaultThemeService } from './kit-default-theme.service';
import { KitDefaultButtonStyle } from './components/kit-default-button.style';
import { KitDefaultDatePickerStyle } from './components/kit-default-date-picker.style';
import { KitDefaultInputStyle } from './components/kit-default-input.style';
import { KitDefaultSelectStyle } from './components/kit-default-select.style';

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
        // buttons
        {
          provide: kitComponentButton,
          useClass: KitDefaultButtonStyle,
        },
        // forms
        {
          provide: kitComponentDatePicker,
          useClass: KitDefaultDatePickerStyle,
        },
        {
          provide: kitComponentInput,
          useClass: KitDefaultInputStyle,
        },
        {
          provide: kitComponentSelect,
          useClass: KitDefaultSelectStyle,
        },
      ]
    }
  }

}
