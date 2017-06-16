import { ModuleWithProviders, NgModule } from '@angular/core';

import {
  kitComponentButton, kitComponentDatePicker, kitComponentFormError, kitComponentFormGroup,
  kitComponentFormLabel, kitComponentInput, kitComponentMathInput, kitComponentSelect,
  kitTheme
} from '@ngx-kit/core';

import { KitDefaultThemeService } from './kit-default-theme.service';
import { KitDefaultButtonStyle } from './components/kit-default-button.style';
import { KitDefaultDatePickerStyle } from './components/kit-default-date-picker.style';
import { KitDefaultFormErrorStyle } from './components/kit-default-form-error.style';
import { KitDefaultFormGroupStyle } from './components/kit-default-form-group.style';
import { KitDefaultFormLabelStyle } from './components/kit-default-form-label.style';
import { KitDefaultInputStyle } from './components/kit-default-input.style';
import { KitDefaultMathInputStyle } from './components/kit-default-math-input.style';
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
          provide: kitComponentFormError,
          useClass: KitDefaultFormErrorStyle,
        },
        {
          provide: kitComponentFormGroup,
          useClass: KitDefaultFormGroupStyle,
        },
        {
          provide: kitComponentFormLabel,
          useClass: KitDefaultFormLabelStyle,
        },
        {
          provide: kitComponentInput,
          useClass: KitDefaultInputStyle,
        },
        {
          provide: kitComponentMathInput,
          useClass: KitDefaultMathInputStyle,
        },
        {
          provide: kitComponentSelect,
          useClass: KitDefaultSelectStyle,
        },
      ]
    }
  }

}
