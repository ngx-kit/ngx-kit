import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  kitComponentAccordion,
  kitComponentAccordionPanel,
  kitComponentAutoComplete,
  kitComponentBadge,
  kitComponentButton,
  kitComponentButtonGroup,
  kitComponentCheckbox,
  kitComponentDatePicker,
  kitComponentDivider,
  kitComponentDropdownMenu,
  kitComponentDropdownMenuItem,
  kitComponentFormError,
  kitComponentFormGroup,
  kitComponentFormLabel,
  kitComponentInput,
  kitComponentLayout,
  kitComponentLayoutContent,
  kitComponentLayoutFooter,
  kitComponentLayoutHeader,
  kitComponentLayoutSide,
  kitComponentMathInput,
  kitComponentMenu,
  kitComponentMenuGroup,
  kitComponentMenuItem,
  kitComponentMenuSeparator,
  kitComponentMenuSub,
  kitComponentOverlayContainer,
  kitComponentRadio,
  kitComponentSelect,
  kitComponentTabs,
  kitComponentTag,
  kitComponentTextarea,
  kitComponentToggle,
  kitComponentTooltipView,
  kitTheme,
} from '@ngx-kit/core';
import { KitDefaultAccordionPanelStyle } from './components/kit-default-accordion-panel.style';
import { KitDefaultAccordionStyle } from './components/kit-default-accordion.style';
import { KitDefaultAutoCompleteStyle } from './components/kit-default-auto-complete.style';
import { KitDefaultBadgeStyle } from './components/kit-default-badge.style';
import { KitDefaultButtonGroupStyle } from './components/kit-default-button-group.style';
import { KitDefaultButtonStyle } from './components/kit-default-button.style';
import { KitDefaultCheckboxStyle } from './components/kit-default-checkbox.style';
import { KitDefaultDatePickerStyle } from './components/kit-default-date-picker.style';
import { KitDefaultDividerStyle } from './components/kit-default-divider.style';
import { KitDefaultDropdownMenuItemStyle } from './components/kit-default-dropdown-menu-item.style';
import { KitDefaultDropdownMenuStyle } from './components/kit-default-dropdown-menu.style';
import { KitDefaultFormErrorStyle } from './components/kit-default-form-error.style';
import { KitDefaultFormGroupStyle } from './components/kit-default-form-group.style';
import { KitDefaultFormLabelStyle } from './components/kit-default-form-label.style';
import { KitDefaultInputStyle } from './components/kit-default-input.style';
import { KitDefaultLayoutContentStyle } from './components/kit-default-layout-content.style';
import { KitDefaultLayoutFooterStyle } from './components/kit-default-layout-footer.style';
import { KitDefaultLayoutHeaderStyle } from './components/kit-default-layout-header.style';
import { KitDefaultLayoutSideStyle } from './components/kit-default-layout-side.style';
import { KitDefaultLayoutStyle } from './components/kit-default-layout.style';
import { KitDefaultMathInputStyle } from './components/kit-default-math-input.style';
import { KitDefaultMenuGroupStyle } from './components/kit-default-menu-group.style';
import { KitDefaultMenuItemStyle } from './components/kit-default-menu-item.style';
import { KitDefaultMenuSeparatorStyle } from './components/kit-default-menu-separator.style';
import { KitDefaultMenuSubStyle } from './components/kit-default-menu-sub.style';
import { KitDefaultMenuStyle } from './components/kit-default-menu.style';
import { KitDefaultOverlayContainerStyle } from './components/kit-default-overlay-container.style';
import { KitDefaultRadioStyle } from './components/kit-default-radio.style';
import { KitDefaultSelectStyle } from './components/kit-default-select.style';
import { KitDefaultTabsStyle } from './components/kit-default-tabs.style';
import { KitDefaultTagStyle } from './components/kit-default-tag.style';
import { KitDefaultTextareaStyle } from './components/kit-default-textarea.style';
import { KitDefaultToggleStyle } from './components/kit-default-toggle.style';
import { KitDefaultTooltipViewStyle } from './components/kit-default-tooltip-view.style';
import { KitDefaultThemeService } from './kit-default-theme.service';

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
        // layout
        {
          provide: kitComponentLayout,
          useClass: KitDefaultLayoutStyle,
        },
        {
          provide: kitComponentLayoutContent,
          useClass: KitDefaultLayoutContentStyle,
        },
        {
          provide: kitComponentLayoutFooter,
          useClass: KitDefaultLayoutFooterStyle,
        },
        {
          provide: kitComponentLayoutHeader,
          useClass: KitDefaultLayoutHeaderStyle,
        },
        {
          provide: kitComponentLayoutSide,
          useClass: KitDefaultLayoutSideStyle,
        },
        // misc
        {
          provide: kitComponentAccordion,
          useClass: KitDefaultAccordionStyle,
        },
        {
          provide: kitComponentAccordionPanel,
          useClass: KitDefaultAccordionPanelStyle,
        },
        {
          provide: kitComponentBadge,
          useClass: KitDefaultBadgeStyle,
        },
        {
          provide: kitComponentDivider,
          useClass: KitDefaultDividerStyle,
        },
        {
          provide: kitComponentTabs,
          useClass: KitDefaultTabsStyle,
        },
        {
          provide: kitComponentTag,
          useClass: KitDefaultTagStyle,
        },
        {
          provide: kitComponentTooltipView,
          useClass: KitDefaultTooltipViewStyle,
        },
        // navigation
        {
          provide: kitComponentMenu,
          useClass: KitDefaultMenuStyle,
        },
        {
          provide: kitComponentMenuGroup,
          useClass: KitDefaultMenuGroupStyle,
        },
        {
          provide: kitComponentMenuItem,
          useClass: KitDefaultMenuItemStyle,
        },
        {
          provide: kitComponentMenuSeparator,
          useClass: KitDefaultMenuSeparatorStyle,
        },
        {
          provide: kitComponentMenuSub,
          useClass: KitDefaultMenuSubStyle,
        },
      ],
    };
  }
}
