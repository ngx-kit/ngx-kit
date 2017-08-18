import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  kitComponentAccordion,
  kitComponentAccordionPanel,
  kitComponentAlert,
  kitComponentAlertTitle,
  kitComponentAutoComplete,
  kitComponentBadge,
  kitComponentButton,
  kitComponentButtonGroup,
  kitComponentCheckbox,
  kitComponentColorPicker,
  kitComponentColorPickerPopup,
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
  kitComponentMenu,
  kitComponentMenuGroup,
  kitComponentMenuGroupTitle,
  kitComponentMenuItem,
  kitComponentMenuSeparator,
  kitComponentMenuSub,
  kitComponentModal,
  kitComponentModalBody,
  kitComponentModalFooter,
  kitComponentModalHeader,
  kitComponentNotificationHost,
  kitComponentOverlayContainer,
  kitComponentRadio,
  kitComponentRadioGroup,
  kitComponentSelect,
  kitComponentSpinner,
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
import { KitDefaultAlertTitleStyle } from './styles/alert/kit-default-alert-title.style';
import { KitDefaultAlertStyle } from './styles/alert/kit-default-alert.style';
import { KitDefaultAutoCompleteStyle } from './styles/auto-complete/kit-default-auto-complete.style';
import { KitDefaultBadgeStyle } from './styles/badge/kit-default-badge.style';
import { KitDefaultButtonGroupStyle } from './styles/button/kit-default-button-group.style';
import { KitDefaultButtonStyle } from './styles/button/kit-default-button.style';
import { KitDefaultCheckboxStyle } from './styles/checkbox/kit-default-checkbox.style';
import { KitDefaultColorPickerPopupStyle } from './styles/color-picker/kit-default-color-picker-popup.style';
import { KitDefaultColorPickerStyle } from './styles/color-picker/kit-default-color-picker.style';
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
import { KitDefaultMenuGroupTitleStyle } from './styles/menu/kit-default-menu-group-title.style';
import { KitDefaultMenuGroupStyle } from './styles/menu/kit-default-menu-group.style';
import { KitDefaultMenuItemStyle } from './styles/menu/kit-default-menu-item.style';
import { KitDefaultMenuSeparatorStyle } from './styles/menu/kit-default-menu-separator.style';
import { KitDefaultMenuSubStyle } from './styles/menu/kit-default-menu-sub.style';
import { KitDefaultMenuStyle } from './styles/menu/kit-default-menu.style';
import { KitDefaultModalBodyStyle } from './styles/modal/kit-default-modal-body.style';
import { KitDefaultModalFooterStyle } from './styles/modal/kit-default-modal-footer.style';
import { KitDefaultModalHeaderStyle } from './styles/modal/kit-default-modal-header.style';
import { KitDefaultModalStyle } from './styles/modal/kit-default-modal.style';
import { KitDefaultNotificationHostStyle } from './styles/notification/kit-default-notification-host.style';
import { KitDefaultRadioGroupStyle } from './styles/radio/kit-default-radio-group.style';
import { KitDefaultRadioStyle } from './styles/radio/kit-default-radio.style';
import { KitDefaultSelectStyle } from './styles/select/kit-default-select.style';
import { KitDefaultSpinnerStyle } from './styles/spinner/kit-default-spinner.style';
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
        // styles
        {
          provide: kitComponentAccordion,
          useClass: KitDefaultAccordionStyle,
        },
        {
          provide: kitComponentAccordionPanel,
          useClass: KitDefaultAccordionPanelStyle,
        },
        {
          provide: kitComponentAlert,
          useClass: KitDefaultAlertStyle,
        },
        {
          provide: kitComponentAlertTitle,
          useClass: KitDefaultAlertTitleStyle,
        },
        {
          provide: kitComponentAutoComplete,
          useClass: KitDefaultAutoCompleteStyle,
        },
        {
          provide: kitComponentBadge,
          useClass: KitDefaultBadgeStyle,
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
          provide: kitComponentCheckbox,
          useClass: KitDefaultCheckboxStyle,
        },
        {
          provide: kitComponentColorPicker,
          useClass: KitDefaultColorPickerStyle,
        },
        {
          provide: kitComponentColorPickerPopup,
          useClass: KitDefaultColorPickerPopupStyle,
        },
        {
          provide: kitComponentDivider,
          useClass: KitDefaultDividerStyle,
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
          provide: kitComponentMenu,
          useClass: KitDefaultMenuStyle,
        },
        {
          provide: kitComponentMenuGroup,
          useClass: KitDefaultMenuGroupStyle,
        },
        {
          provide: kitComponentMenuGroupTitle,
          useClass: KitDefaultMenuGroupTitleStyle,
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
          provide: kitComponentModal,
          useClass: KitDefaultModalStyle,
        },
        {
          provide: kitComponentModalBody,
          useClass: KitDefaultModalBodyStyle,
        },
        {
          provide: kitComponentModalFooter,
          useClass: KitDefaultModalFooterStyle,
        },
        {
          provide: kitComponentModalHeader,
          useClass: KitDefaultModalHeaderStyle,
        },
        {
          provide: kitComponentNotificationHost,
          useClass: KitDefaultNotificationHostStyle,
        },
        {
          provide: kitComponentOverlayContainer,
          useClass: KitDefaultOverlayContainerStyle,
        },
        {
          provide: kitComponentRadio,
          useClass: KitDefaultRadioStyle,
        },
        {
          provide: kitComponentRadioGroup,
          useClass: KitDefaultRadioGroupStyle,
        },
        {
          provide: kitComponentSelect,
          useClass: KitDefaultSelectStyle,
        },
        {
          provide: kitComponentSpinner,
          useClass: KitDefaultSpinnerStyle,
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
          provide: kitComponentTextarea,
          useClass: KitDefaultTextareaStyle,
        },
        {
          provide: kitComponentToggle,
          useClass: KitDefaultToggleStyle,
        },
        {
          provide: kitComponentTooltipView,
          useClass: KitDefaultTooltipViewStyle,
        },
        {
          provide: kitComponentTypoContainer,
          useClass: KitDefaultTypoContainerStyle,
        },
      ],
    };
  }
}
