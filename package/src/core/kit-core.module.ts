import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreService } from './kit-core.service';
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
          provide: kitComponentAccordion,
          useClass: KitCoreAccordionStyle,
          multi: true,
        },
        {
          provide: kitComponentAccordionPanel,
          useClass: KitCoreAccordionPanelStyle,
          multi: true,
        },
        {
          provide: kitComponentAlert,
          useClass: KitCoreAlertStyle,
          multi: true,
        },
        {
          provide: kitComponentAlertTitle,
          useClass: KitCoreAlertStyle,
          multi: true,
        },
        {
          provide: kitComponentAutoComplete,
          useClass: KitCoreAutoCompleteStyle,
          multi: true,
        },
        {
          provide: kitComponentBadge,
          useClass: KitCoreBadgeStyle,
          multi: true,
        },
        {
          provide: kitComponentButton,
          useClass: KitCoreButtonStyle,
          multi: true,
        },
        {
          provide: kitComponentButtonGroup,
          useClass: KitCoreButtonGroupStyle,
          multi: true,
        },
        {
          provide: kitComponentCheckbox,
          useClass: KitCoreCheckboxStyle,
          multi: true,
        },
        {
          provide: kitComponentColorPicker,
          useClass: KitCoreColorPickerStyle,
          multi: true,
        },
        {
          provide: kitComponentColorPickerPopup,
          useClass: KitCoreColorPickerPopupStyle,
          multi: true,
        },
        {
          provide: kitComponentDivider,
          useClass: KitCoreDividerStyle,
          multi: true,
        },
        {
          provide: kitComponentDropdownMenu,
          useClass: KitCoreDropdownMenuStyle,
          multi: true,
        },
        {
          provide: kitComponentDropdownMenuItem,
          useClass: KitCoreDropdownMenuItemStyle,
          multi: true,
        },
        {
          provide: kitComponentDatePicker,
          useClass: KitCoreDatePickerStyle,
          multi: true,
        },
        {
          provide: kitComponentFormError,
          useClass: KitCoreFormErrorStyle,
          multi: true,
        },
        {
          provide: kitComponentFormGroup,
          useClass: KitCoreFormGroupStyle,
          multi: true,
        },
        {
          provide: kitComponentFormLabel,
          useClass: KitCoreFormLabelStyle,
          multi: true,
        },
        {
          provide: kitComponentInput,
          useClass: KitCoreInputStyle,
          multi: true,
        },
        {
          provide: kitComponentLayout,
          useClass: KitCoreLayoutStyle,
          multi: true,
        },
        {
          provide: kitComponentLayoutContent,
          useClass: KitCoreLayoutContentStyle,
          multi: true,
        },
        {
          provide: kitComponentLayoutFooter,
          useClass: KitCoreLayoutFooterStyle,
          multi: true,
        },
        {
          provide: kitComponentLayoutHeader,
          useClass: KitCoreLayoutHeaderStyle,
          multi: true,
        },
        {
          provide: kitComponentLayoutSide,
          useClass: KitCoreLayoutSideStyle,
          multi: true,
        },
        {
          provide: kitComponentLoadingBar,
          useClass: KitCoreLoadingBarStyle,
          multi: true,
        },
        {
          provide: kitComponentMenu,
          useClass: KitCoreMenuStyle,
          multi: true,
        },
        {
          provide: kitComponentMenuGroup,
          useClass: KitCoreMenuGroupStyle,
          multi: true,
        },
        {
          provide: kitComponentMenuGroupTitle,
          useClass: KitCoreMenuGroupTitleStyle,
          multi: true,
        },
        {
          provide: kitComponentMenuItem,
          useClass: KitCoreMenuItemStyle,
          multi: true,
        },
        {
          provide: kitComponentMenuSeparator,
          useClass: KitCoreMenuSeparatorStyle,
          multi: true,
        },
        {
          provide: kitComponentMenuSub,
          useClass: KitCoreMenuSubStyle,
          multi: true,
        },
        {
          provide: kitComponentModal,
          useClass: KitCoreModalStyle,
          multi: true,
        },
        {
          provide: kitComponentModalBody,
          useClass: KitCoreModalBodyStyle,
          multi: true,
        },
        {
          provide: kitComponentModalFooter,
          useClass: KitCoreModalFooterStyle,
          multi: true,
        },
        {
          provide: kitComponentModalHeader,
          useClass: KitCoreModalHeaderStyle,
          multi: true,
        },
        {
          provide: kitComponentNotificationHost,
          useClass: KitCoreNotificationHostStyle,
          multi: true,
        },
        {
          provide: kitComponentOverlayContainer,
          useClass: KitCoreOverlayContainerStyle,
          multi: true,
        },
        {
          provide: kitComponentRadio,
          useClass: KitCoreRadioStyle,
          multi: true,
        },
        {
          provide: kitComponentRadioGroup,
          useClass: KitCoreRadioGroupStyle,
          multi: true,
        },
        {
          provide: kitComponentSelect,
          useClass: KitCoreSelectStyle,
          multi: true,
        },
        {
          provide: kitComponentSpinner,
          useClass: KitCoreSpinnerStyle,
          multi: true,
        },
        {
          provide: kitComponentTabs,
          useClass: KitCoreTabsStyle,
          multi: true,
        },
        {
          provide: kitComponentTag,
          useClass: KitCoreTagStyle,
          multi: true,
        },
        {
          provide: kitComponentTextarea,
          useClass: KitCoreTextareaStyle,
          multi: true,
        },
        {
          provide: kitComponentToggle,
          useClass: KitCoreToggleStyle,
          multi: true,
        },
        {
          provide: kitComponentTooltipView,
          useClass: KitCoreTooltipViewStyle,
          multi: true,
        },
        {
          provide: kitComponentTypoContainer,
          useClass: KitCoreTypoContainerStyle,
          multi: true,
        },
      ],
    }
  }
}
