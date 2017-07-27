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
  kitComponentLoadingBar,
  kitComponentMathInput,
  kitComponentMenu,
  kitComponentMenuGroup,
  kitComponentMenuItem,
  kitComponentMenuSeparator,
  kitComponentMenuSub,
  kitComponentModal,
  kitComponentOverlayContainer,
  kitComponentRadio,
  kitComponentSelect,
  kitComponentTabs,
  kitComponentTag,
  kitComponentTextarea,
  kitComponentToggle,
  kitComponentTooltipView,
  kitComponentTypoContainer,
  kitTheme,
} from '../core/meta/tokens';
import { KitDefaultThemeService } from './kit-default-theme.service';
import { KitDefaultAccordionPanelStyle } from './styles/accordion/kit-default-accordion-panel.style';
import { KitDefaultAccordionStyle } from './styles/accordion/kit-default-accordion.style';
import { KitDefaultAutoCompleteStyle } from './styles/auto-complete/kit-default-auto-complete.style';
import { KitDefaultBadgeStyle } from './styles/badge/kit-default-badge.style';
import { KitDefaultButtonGroupStyle } from './styles/button/kit-default-button-group.style';
import { KitDefaultButtonStyle } from './styles/button/kit-default-button.style';
import { KitDefaultCheckboxStyle } from './styles/checkbox/kit-default-checkbox.style';
import { KitDefaultOverlayContainerStyle } from './styles/core/kit-default-overlay-container.style';
import { KitDefaultDatePickerStyle } from './styles/date-picker/kit-default-date-picker.style';
import { KitDefaultDividerStyle } from './styles/divider/kit-default-divider.style';
import { KitDefaultDropdownMenuItemStyle } from './styles/dropdown-menu/kit-default-dropdown-menu-item.style';
import { KitDefaultDropdownMenuStyle } from './styles/dropdown-menu/kit-default-dropdown-menu.style';
import { KitDefaultFormErrorStyle } from './styles/form/kit-default-form-error.style';
import { KitDefaultFormGroupStyle } from './styles/form/kit-default-form-group.style';
import { KitDefaultFormLabelStyle } from './styles/form/kit-default-form-label.style';
import { KitDefaultInputStyle } from './styles/input/kit-default-input.style';
import { KitDefaultLayoutContentStyle } from './styles/layout/kit-default-layout-content.style';
import { KitDefaultLayoutFooterStyle } from './styles/layout/kit-default-layout-footer.style';
import { KitDefaultLayoutHeaderStyle } from './styles/layout/kit-default-layout-header.style';
import { KitDefaultLayoutSideStyle } from './styles/layout/kit-default-layout-side.style';
import { KitDefaultLayoutStyle } from './styles/layout/kit-default-layout.style';
import { KitDefaultLoadingBarStyle } from './styles/loading-bar/kit-default-loading-bar.style';
import { KitDefaultMathInputStyle } from './styles/math-input/kit-default-math-input.style';
import { KitDefaultMenuGroupStyle } from './styles/menu/kit-default-menu-group.style';
import { KitDefaultMenuItemStyle } from './styles/menu/kit-default-menu-item.style';
import { KitDefaultMenuSeparatorStyle } from './styles/menu/kit-default-menu-separator.style';
import { KitDefaultMenuSubStyle } from './styles/menu/kit-default-menu-sub.style';
import { KitDefaultMenuStyle } from './styles/menu/kit-default-menu.style';
import { KitDefaultModalStyle } from './styles/modal/kit-default-modal.style';
import { KitDefaultRadioStyle } from './styles/radio/kit-default-radio.style';
import { KitDefaultSelectStyle } from './styles/select/kit-default-select.style';
import { KitDefaultTabsStyle } from './styles/tabs/kit-default-tabs.style';
import { KitDefaultTagStyle } from './styles/tag/kit-default-tag.style';
import { KitDefaultTextareaStyle } from './styles/textarea/kit-default-textarea.style';
import { KitDefaultToggleStyle } from './styles/toggle/kit-default-toggle.style';
import { KitDefaultTooltipViewStyle } from './styles/tooltip/kit-default-tooltip-view.style';
import { KitDefaultTypoContainerStyle } from './styles/typo/kit-default-typo-container.style';

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
        {
          provide: kitComponentOverlayContainer,
          useClass: KitDefaultOverlayContainerStyle,
        },
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
        {
          provide: kitComponentLoadingBar,
          useClass: KitDefaultLoadingBarStyle,
        },
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
        {
          provide: kitComponentModal,
          useClass: KitDefaultModalStyle,
        },
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
        {
          provide: kitComponentTypoContainer,
          useClass: KitDefaultTypoContainerStyle,
        },
      ],
    };
  }
}
