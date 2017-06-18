import { ModuleWithProviders, NgModule } from '@angular/core';

import {
  kitComponentAutoComplete,
  kitComponentButton, kitComponentCheckbox, kitComponentDatePicker, kitComponentFormError, kitComponentFormGroup,
  kitComponentFormLabel, kitComponentHostContainer, kitComponentInput, kitComponentMathInput,
  kitComponentRadio, kitComponentSelect, kitComponentTextarea, kitComponentToggle,
  kitTheme
} from '@ngx-kit/core';

import { KitDefaultThemeService } from './kit-default-theme.service';
// core
import { KitDefaultHostContainerStyle } from './components/kit-default-host-container.style';
// buttons
import { KitDefaultButtonStyle } from './components/kit-default-button.style';
// forms
import { KitDefaultAutoCompleteStyle } from './components/kit-default-auto-complete.style';
import { KitDefaultCheckboxStyle } from './components/kit-default-checkbox.style';
import { KitDefaultDatePickerStyle } from './components/kit-default-date-picker.style';
import { KitDefaultFormErrorStyle } from './components/kit-default-form-error.style';
import { KitDefaultFormGroupStyle } from './components/kit-default-form-group.style';
import { KitDefaultFormLabelStyle } from './components/kit-default-form-label.style';
import { KitDefaultInputStyle } from './components/kit-default-input.style';
import { KitDefaultMathInputStyle } from './components/kit-default-math-input.style';
import { KitDefaultRadioStyle } from './components/kit-default-radio.style';
import { KitDefaultSelectStyle } from './components/kit-default-select.style';
import { KitDefaultTextareaStyle } from './components/kit-default-textarea.style';
import { KitDefaultToggleStyle } from './components/kit-default-toggle.style';

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
          // core
        {
          provide: kitComponentHostContainer,
          useClass: KitDefaultHostContainerStyle,
        },
        // buttons
        {
          provide: kitComponentButton,
          useClass: KitDefaultButtonStyle,
        },
        // forms
        {
          provide: kitComponentAutoComplete,
          useClass: KitDefaultAutoCompleteStyle,
        },
        {
          provide: kitComponentCheckbox,
          useClass: KitDefaultCheckboxStyle,
        },
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
          provide: kitComponentRadio,
          useClass: KitDefaultRadioStyle,
        },
        {
          provide: kitComponentSelect,
          useClass: KitDefaultSelectStyle,
        },
        {
          provide: kitComponentTextarea,
          useClass: KitDefaultTextareaStyle,
        },
        {
          provide: kitComponentToggle,
          useClass: KitDefaultToggleStyle,
        },
      ]
    }
  }

}
