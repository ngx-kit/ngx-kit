import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreService } from './kit-core.service';
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
} from './meta/tokens';
import { KitAnchorDirective } from './overlay/anchor.directive';
import { KitOverlayService } from './overlay/kit-overlay.service';
import { KitOverlayContainerComponent } from './overlay/overlay-container.component';
import { KitOverlayHostComponent } from './overlay/overlay-host.component';
import { KitOverlayComponent } from './overlay/overlay.component';
import { KitCoreAccordionPanelStyle } from './styles/accordion/kit-core-accordion-panel.style';
import { KitCoreAccordionStyle } from './styles/accordion/kit-core-accordion.style';
import { KitCoreAlertStyle } from './styles/alert/kit-core-alert.style';
import { KitCoreAutoCompleteStyle } from './styles/auto-complete/kit-core-auto-complete.style';
import { KitCoreBadgeStyle } from './styles/badge/kit-core-badge.style';
import { KitCoreButtonGroupStyle } from './styles/button/kit-core-button-group.style';
import { KitCoreButtonStyle } from './styles/button/kit-core-button.style';
import { KitCoreCheckboxStyle } from './styles/checkbox/kit-core-checkbox.style';
import { KitCoreColorPickerPopupStyle } from './styles/color-picker/kit-core-color-picker-popup.style';
import { KitCoreColorPickerStyle } from './styles/color-picker/kit-core-color-picker.style';
import { KitCoreOverlayContainerStyle } from './styles/core/kit-core-overlay-container.style';
import { KitCoreDatePickerStyle } from './styles/date-picker/kit-core-date-picker.style';
import { KitCoreDividerStyle } from './styles/divider/kit-core-divider.style';
import { KitCoreDropdownMenuItemStyle } from './styles/dropdown-menu/kit-core-dropdown-menu-item.style';
import { KitCoreDropdownMenuStyle } from './styles/dropdown-menu/kit-core-dropdown-menu.style';
import { KitCoreFormErrorStyle } from './styles/form/kit-core-form-error.style';
import { KitCoreFormGroupStyle } from './styles/form/kit-core-form-group.style';
import { KitCoreFormLabelStyle } from './styles/form/kit-core-form-label.style';
import { KitCoreInputStyle } from './styles/input/kit-core-input.style';
import { KitCoreLayoutContentStyle } from './styles/layout/kit-core-layout-content.style';
import { KitCoreLayoutFooterStyle } from './styles/layout/kit-core-layout-footer.style';
import { KitCoreLayoutHeaderStyle } from './styles/layout/kit-core-layout-header.style';
import { KitCoreLayoutSideStyle } from './styles/layout/kit-core-layout-side.style';
import { KitCoreLayoutStyle } from './styles/layout/kit-core-layout.style';
import { KitCoreLoadingBarStyle } from './styles/loading-bar/kit-core-loading-bar.style';
import { KitCoreMenuGroupTitleStyle } from './styles/menu/kit-core-menu-group-title.style';
import { KitCoreMenuGroupStyle } from './styles/menu/kit-core-menu-group.style';
import { KitCoreMenuItemStyle } from './styles/menu/kit-core-menu-item.style';
import { KitCoreMenuSeparatorStyle } from './styles/menu/kit-core-menu-separator.style';
import { KitCoreMenuSubStyle } from './styles/menu/kit-core-menu-sub.style';
import { KitCoreMenuStyle } from './styles/menu/kit-core-menu.style';
import { KitCoreModalBodyStyle } from './styles/modal/kit-core-modal-body.style';
import { KitCoreModalFooterStyle } from './styles/modal/kit-core-modal-footer.style';
import { KitCoreModalHeaderStyle } from './styles/modal/kit-core-modal-header.style';
import { KitCoreModalStyle } from './styles/modal/kit-core-modal.style';
import { KitCoreNotificationHostStyle } from './styles/notification/kit-core-notification-host.style';
import { KitCoreRadioGroupStyle } from './styles/radio/kit-core-radio-group.style';
import { KitCoreRadioStyle } from './styles/radio/kit-core-radio.style';
import { KitCoreSelectStyle } from './styles/select/kit-core-select.style';
import { KitCoreSpinnerStyle } from './styles/spinner/kit-core-spinner.style';
import { KitCoreTabsStyle } from './styles/tabs/kit-core-tabs.style';
import { KitCoreTagStyle } from './styles/tag/kit-core-tag.style';
import { KitCoreTextareaStyle } from './styles/textarea/kit-core-textarea.style';
import { KitCoreToggleStyle } from './styles/toggle/kit-core-toggle.style';
import { KitCoreTooltipViewStyle } from './styles/tooltip/kit-core-tooltip-view.style';
import { KitCoreTypoContainerStyle } from './styles/typo/kit-core-typo-container.style';

const exports = [
  KitAnchorDirective,
  KitOverlayComponent,
  KitOverlayContainerComponent,
];
const entries = [
  KitOverlayHostComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
  ],
  exports: [
    ...exports,
  ],
  declarations: [
    ...exports,
    ...entries,
  ],
  entryComponents: [
    ...entries,
  ],
  providers: [],
})
export class KitCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitCoreModule,
      providers: [
        KitCoreService,
        KitOverlayService,
        // styles
        {
          provide: kitAccordionStyle,
          useClass: KitCoreAccordionStyle,
          multi: true,
        },
        {
          provide: kitAccordionPanelStyle,
          useClass: KitCoreAccordionPanelStyle,
          multi: true,
        },
        {
          provide: kitAlertStyle,
          useClass: KitCoreAlertStyle,
          multi: true,
        },
        {
          provide: kitAlertTitleStyle,
          useClass: KitCoreAlertStyle,
          multi: true,
        },
        {
          provide: kitAutoCompleteStyle,
          useClass: KitCoreAutoCompleteStyle,
          multi: true,
        },
        {
          provide: kitBadgeStyle,
          useClass: KitCoreBadgeStyle,
          multi: true,
        },
        {
          provide: kitButtonStyle,
          useClass: KitCoreButtonStyle,
          multi: true,
        },
        {
          provide: kitButtonGroupStyle,
          useClass: KitCoreButtonGroupStyle,
          multi: true,
        },
        {
          provide: kitCheckboxStyle,
          useClass: KitCoreCheckboxStyle,
          multi: true,
        },
        {
          provide: kitColorPickerStyle,
          useClass: KitCoreColorPickerStyle,
          multi: true,
        },
        {
          provide: kitColorPickerPopupStyle,
          useClass: KitCoreColorPickerPopupStyle,
          multi: true,
        },
        {
          provide: kitDividerStyle,
          useClass: KitCoreDividerStyle,
          multi: true,
        },
        {
          provide: kitDropdownMenuStyle,
          useClass: KitCoreDropdownMenuStyle,
          multi: true,
        },
        {
          provide: kitDropdownMenuItemStyle,
          useClass: KitCoreDropdownMenuItemStyle,
          multi: true,
        },
        {
          provide: kitDatePickerStyle,
          useClass: KitCoreDatePickerStyle,
          multi: true,
        },
        {
          provide: kitFormErrorStyle,
          useClass: KitCoreFormErrorStyle,
          multi: true,
        },
        {
          provide: kitFormGroupStyle,
          useClass: KitCoreFormGroupStyle,
          multi: true,
        },
        {
          provide: kitFormLabelStyle,
          useClass: KitCoreFormLabelStyle,
          multi: true,
        },
        {
          provide: kitInputStyle,
          useClass: KitCoreInputStyle,
          multi: true,
        },
        {
          provide: kitLayoutStyle,
          useClass: KitCoreLayoutStyle,
          multi: true,
        },
        {
          provide: kitLayoutContentStyle,
          useClass: KitCoreLayoutContentStyle,
          multi: true,
        },
        {
          provide: kitLayoutFooterStyle,
          useClass: KitCoreLayoutFooterStyle,
          multi: true,
        },
        {
          provide: kitLayoutHeaderStyle,
          useClass: KitCoreLayoutHeaderStyle,
          multi: true,
        },
        {
          provide: kitLayoutSideStyle,
          useClass: KitCoreLayoutSideStyle,
          multi: true,
        },
        {
          provide: kitLoadingBarStyle,
          useClass: KitCoreLoadingBarStyle,
          multi: true,
        },
        {
          provide: kitMenuStyle,
          useClass: KitCoreMenuStyle,
          multi: true,
        },
        {
          provide: kitMenuGroupStyle,
          useClass: KitCoreMenuGroupStyle,
          multi: true,
        },
        {
          provide: kitMenuGroupTitleStyle,
          useClass: KitCoreMenuGroupTitleStyle,
          multi: true,
        },
        {
          provide: kitMenuItemStyle,
          useClass: KitCoreMenuItemStyle,
          multi: true,
        },
        {
          provide: kitMenuSeparatorStyle,
          useClass: KitCoreMenuSeparatorStyle,
          multi: true,
        },
        {
          provide: kitMenuSubStyle,
          useClass: KitCoreMenuSubStyle,
          multi: true,
        },
        {
          provide: kitModalStyle,
          useClass: KitCoreModalStyle,
          multi: true,
        },
        {
          provide: kitModalBodyStyle,
          useClass: KitCoreModalBodyStyle,
          multi: true,
        },
        {
          provide: kitModalFooterStyle,
          useClass: KitCoreModalFooterStyle,
          multi: true,
        },
        {
          provide: kitModalHeaderStyle,
          useClass: KitCoreModalHeaderStyle,
          multi: true,
        },
        {
          provide: kitNotificationHostStyle,
          useClass: KitCoreNotificationHostStyle,
          multi: true,
        },
        {
          provide: kitOverlayContainerStyle,
          useClass: KitCoreOverlayContainerStyle,
          multi: true,
        },
        {
          provide: kitRadioStyle,
          useClass: KitCoreRadioStyle,
          multi: true,
        },
        {
          provide: kitRadioGroupStyle,
          useClass: KitCoreRadioGroupStyle,
          multi: true,
        },
        {
          provide: kitSelectStyle,
          useClass: KitCoreSelectStyle,
          multi: true,
        },
        {
          provide: kitSpinnerStyle,
          useClass: KitCoreSpinnerStyle,
          multi: true,
        },
        {
          provide: kitTabsStyle,
          useClass: KitCoreTabsStyle,
          multi: true,
        },
        {
          provide: kitTagStyle,
          useClass: KitCoreTagStyle,
          multi: true,
        },
        {
          provide: kitTextareaStyle,
          useClass: KitCoreTextareaStyle,
          multi: true,
        },
        {
          provide: kitToggleStyle,
          useClass: KitCoreToggleStyle,
          multi: true,
        },
        {
          provide: kitTooltipViewStyle,
          useClass: KitCoreTooltipViewStyle,
          multi: true,
        },
        {
          provide: kitTypoContainerStyle,
          useClass: KitCoreTypoContainerStyle,
          multi: true,
        },
      ],
    }
  }
}
