import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  kitAccordionStyle,
  kitAccordionPanelStyle,
  kitAlertStyle,
  kitAlertTitleStyle,
  kitAutoCompleteStyle,
  kitBadgeStyle,
  kitButtonStyle,
  kitButtonGroupStyle,
  kitCheckboxStyle,
  kitColorPickerStyle,
  kitColorPickerPopupStyle,
  kitDatePickerStyle,
  kitDividerStyle,
  kitDropdownMenuStyle,
  kitDropdownMenuItemStyle,
  kitFormErrorStyle,
  kitFormGroupStyle,
  kitFormLabelStyle,
  kitInputStyle,
  kitLayoutStyle,
  kitLayoutContentStyle,
  kitLayoutFooterStyle,
  kitLayoutHeaderStyle,
  kitLayoutSideStyle,
  kitLoadingBarStyle,
  kitMenuStyle,
  kitMenuGroupStyle,
  kitMenuGroupTitleStyle,
  kitMenuItemStyle,
  kitMenuSeparatorStyle,
  kitMenuSubStyle,
  kitModalStyle,
  kitModalBodyStyle,
  kitModalFooterStyle,
  kitModalHeaderStyle,
  kitNotificationHostStyle,
  kitOverlayContainerStyle,
  kitRadioStyle,
  kitRadioGroupStyle,
  kitSelectStyle,
  kitSpinnerStyle,
  kitTabsStyle,
  kitTagStyle,
  kitTextareaStyle,
  kitToggleStyle,
  kitTooltipViewStyle,
  kitTypoContainerStyle,
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
          provide: kitAccordionStyle,
          useClass: KitDefaultAccordionStyle,
          multi: true,
        },
        {
          provide: kitAccordionPanelStyle,
          useClass: KitDefaultAccordionPanelStyle,
          multi: true,
        },
        {
          provide: kitAlertStyle,
          useClass: KitDefaultAlertStyle,
          multi: true,
        },
        {
          provide: kitAlertTitleStyle,
          useClass: KitDefaultAlertTitleStyle,
          multi: true,
        },
        {
          provide: kitAutoCompleteStyle,
          useClass: KitDefaultAutoCompleteStyle,
          multi: true,
        },
        {
          provide: kitBadgeStyle,
          useClass: KitDefaultBadgeStyle,
          multi: true,
        },
        {
          provide: kitButtonStyle,
          useClass: KitDefaultButtonStyle,
          multi: true,
        },
        {
          provide: kitButtonGroupStyle,
          useClass: KitDefaultButtonGroupStyle,
          multi: true,
        },
        {
          provide: kitCheckboxStyle,
          useClass: KitDefaultCheckboxStyle,
          multi: true,
        },
        {
          provide: kitColorPickerStyle,
          useClass: KitDefaultColorPickerStyle,
          multi: true,
        },
        {
          provide: kitColorPickerPopupStyle,
          useClass: KitDefaultColorPickerPopupStyle,
          multi: true,
        },
        {
          provide: kitDividerStyle,
          useClass: KitDefaultDividerStyle,
          multi: true,
        },
        {
          provide: kitDropdownMenuStyle,
          useClass: KitDefaultDropdownMenuStyle,
          multi: true,
        },
        {
          provide: kitDropdownMenuItemStyle,
          useClass: KitDefaultDropdownMenuItemStyle,
          multi: true,
        },
        {
          provide: kitDatePickerStyle,
          useClass: KitDefaultDatePickerStyle,
          multi: true,
        },
        {
          provide: kitFormErrorStyle,
          useClass: KitDefaultFormErrorStyle,
          multi: true,
        },
        {
          provide: kitFormGroupStyle,
          useClass: KitDefaultFormGroupStyle,
          multi: true,
        },
        {
          provide: kitFormLabelStyle,
          useClass: KitDefaultFormLabelStyle,
          multi: true,
        },
        {
          provide: kitInputStyle,
          useClass: KitDefaultInputStyle,
          multi: true,
        },
        {
          provide: kitLayoutStyle,
          useClass: KitDefaultLayoutStyle,
          multi: true,
        },
        {
          provide: kitLayoutContentStyle,
          useClass: KitDefaultLayoutContentStyle,
          multi: true,
        },
        {
          provide: kitLayoutFooterStyle,
          useClass: KitDefaultLayoutFooterStyle,
          multi: true,
        },
        {
          provide: kitLayoutHeaderStyle,
          useClass: KitDefaultLayoutHeaderStyle,
          multi: true,
        },
        {
          provide: kitLayoutSideStyle,
          useClass: KitDefaultLayoutSideStyle,
          multi: true,
        },
        {
          provide: kitLoadingBarStyle,
          useClass: KitDefaultLoadingBarStyle,
          multi: true,
        },
        {
          provide: kitMenuStyle,
          useClass: KitDefaultMenuStyle,
          multi: true,
        },
        {
          provide: kitMenuGroupStyle,
          useClass: KitDefaultMenuGroupStyle,
          multi: true,
        },
        {
          provide: kitMenuGroupTitleStyle,
          useClass: KitDefaultMenuGroupTitleStyle,
          multi: true,
        },
        {
          provide: kitMenuItemStyle,
          useClass: KitDefaultMenuItemStyle,
          multi: true,
        },
        {
          provide: kitMenuSeparatorStyle,
          useClass: KitDefaultMenuSeparatorStyle,
          multi: true,
        },
        {
          provide: kitMenuSubStyle,
          useClass: KitDefaultMenuSubStyle,
          multi: true,
        },
        {
          provide: kitModalStyle,
          useClass: KitDefaultModalStyle,
          multi: true,
        },
        {
          provide: kitModalBodyStyle,
          useClass: KitDefaultModalBodyStyle,
          multi: true,
        },
        {
          provide: kitModalFooterStyle,
          useClass: KitDefaultModalFooterStyle,
          multi: true,
        },
        {
          provide: kitModalHeaderStyle,
          useClass: KitDefaultModalHeaderStyle,
          multi: true,
        },
        {
          provide: kitNotificationHostStyle,
          useClass: KitDefaultNotificationHostStyle,
          multi: true,
        },
        {
          provide: kitOverlayContainerStyle,
          useClass: KitDefaultOverlayContainerStyle,
          multi: true,
        },
        {
          provide: kitRadioStyle,
          useClass: KitDefaultRadioStyle,
          multi: true,
        },
        {
          provide: kitRadioGroupStyle,
          useClass: KitDefaultRadioGroupStyle,
          multi: true,
        },
        {
          provide: kitSelectStyle,
          useClass: KitDefaultSelectStyle,
          multi: true,
        },
        {
          provide: kitSpinnerStyle,
          useClass: KitDefaultSpinnerStyle,
          multi: true,
        },
        {
          provide: kitTabsStyle,
          useClass: KitDefaultTabsStyle,
          multi: true,
        },
        {
          provide: kitTagStyle,
          useClass: KitDefaultTagStyle,
          multi: true,
        },
        {
          provide: kitTextareaStyle,
          useClass: KitDefaultTextareaStyle,
          multi: true,
        },
        {
          provide: kitToggleStyle,
          useClass: KitDefaultToggleStyle,
          multi: true,
        },
        {
          provide: kitTooltipViewStyle,
          useClass: KitDefaultTooltipViewStyle,
          multi: true,
        },
        {
          provide: kitTypoContainerStyle,
          useClass: KitDefaultTypoContainerStyle,
          multi: true,
        },
      ],
    };
  }
}
