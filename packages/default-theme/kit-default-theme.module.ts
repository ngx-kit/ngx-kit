import { ModuleWithProviders, NgModule } from '@angular/core';

import {
  kitComponentAutoComplete, kitComponentBadge,
  kitComponentButton, kitComponentCheckbox, kitComponentDatePicker,
  kitComponentDivider, kitComponentFormError, kitComponentFormGroup,
  kitComponentFormLabel, kitComponentOverlayContainer, kitComponentInput, kitComponentMathInput,
  kitComponentRadio, kitComponentSelect, kitComponentTag, kitComponentTextarea, kitComponentToggle,
  kitTheme, kitComponentTooltipView, kitComponentButtonGroup, kitComponentDropdownMenu, kitComponentDropdownMenuItem,
  kitComponentTabs, kitComponentAccordion, kitComponentAccordionPanel
} from '@ngx-kit/core';

import { KitDefaultThemeService } from './kit-default-theme.service';
// buttons
import { KitDefaultButtonStyle } from './components/kit-default-button.style';
import { KitDefaultButtonGroupStyle } from './components/kit-default-button-group.style';
import { KitDefaultDropdownMenuStyle } from './components/kit-default-dropdown-menu.style';
import { KitDefaultDropdownMenuItemStyle } from './components/kit-default-dropdown-menu-item.style';
// core
import { KitDefaultOverlayContainerStyle } from './components/kit-default-overlay-container.style';
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
// misc
import { KitDefaultBadgeStyle } from './components/kit-default-badge.style';
import { KitDefaultDividerStyle } from './components/kit-default-divider.style';
import { KitDefaultTagStyle } from './components/kit-default-tag.style';
import { KitDefaultTooltipViewStyle } from './components/kit-default-tooltip-view.style';
// panels
import { KitDefaultAccordionStyle } from './components/kit-default-accordion.style';
import { KitDefaultAccordionPanelStyle } from './components/kit-default-accordion-panel.style';
import { KitDefaultTabsStyle } from './components/kit-default-tabs.style';

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
        {
          provide: kitComponentButtonGroup,
          useClass: KitDefaultButtonGroupStyle,
        },
        {
          provide: kitComponentDropdownMenu,
          useClass: KitDefaultDropdownMenuStyle,
        },
        {
          provide: kitComponentDropdownMenuItem,
          useClass: KitDefaultDropdownMenuItemStyle,
        },
        // core
        {
          provide: kitComponentOverlayContainer,
          useClass: KitDefaultOverlayContainerStyle,
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
        // misc
        {
          provide: kitComponentBadge,
          useClass: KitDefaultBadgeStyle,
        },
        {
          provide: kitComponentDivider,
          useClass: KitDefaultDividerStyle,
        },
        {
          provide: kitComponentTag,
          useClass: KitDefaultTagStyle,
        },
        {
          provide: kitComponentTooltipView,
          useClass: KitDefaultTooltipViewStyle,
        },
        // panels
        {
          provide: kitComponentAccordion,
          useClass: KitDefaultAccordionStyle,
        },
        {
          provide: kitComponentAccordionPanel,
          useClass: KitDefaultAccordionPanelStyle,
        },
        {
          provide: kitComponentTabs,
          useClass: KitDefaultTabsStyle,
        },
      ],
    };
  }

}
