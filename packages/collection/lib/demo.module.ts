import { NgModule } from '@angular/core';
import { Type } from '@angular/core/src/type';
import { UiAccordionDemoComponent } from './ui-accordion/demo/ui-accordion-demo.component';
import { UiAccordionDemoModule } from './ui-accordion/demo/ui-accordion-demo.module';
import { UiAlertDemoComponent } from './ui-alert/demo/ui-alert-demo.component';
import { UiAlertDemoModule } from './ui-alert/demo/ui-alert-demo.module';
import { UiAutocompleteDemoComponent } from './ui-autocomplete/demo/ui-autocomplete-demo.component';
import { UiAutocompleteDemoModule } from './ui-autocomplete/demo/ui-autocomplete-demo.module';
import { UiBadgeDemoComponent } from './ui-badge/demo/ui-badge-demo.component';
import { UiBadgeDemoModule } from './ui-badge/demo/ui-badge-demo.module';
import { UiBreadcrumbsDemoComponent } from './ui-breadcrumbs/demo/ui-breadcrumbs-demo.component';
import { UiBreadcrumbsDemoModule } from './ui-breadcrumbs/demo/ui-breadcrumbs-demo.module';
import { UiButtonDemoComponent } from './ui-button/demo/ui-button-demo.component';
import { UiButtonDemoModule } from './ui-button/demo/ui-button-demo.module';
import { UiCarouselDemoComponent } from './ui-carousel/demo/ui-carousel-demo.component';
import { UiCarouselDemoModule } from './ui-carousel/demo/ui-carousel-demo.module';
import { UiCheckboxDemoComponent } from './ui-checkbox/demo/ui-checkbox-demo.component';
import { UiCheckboxDemoModule } from './ui-checkbox/demo/ui-checkbox-demo.module';
import { UiCustomSelectDemoComponent } from './ui-custom-select/demo/ui-custom-select-demo.component';
import { UiCustomSelectDemoModule } from './ui-custom-select/demo/ui-custom-select-demo.module';
import { UiDatePickerDemoComponent } from './ui-date-picker/demo/ui-date-picker-demo.component';
import { UiDatePickerDemoModule } from './ui-date-picker/demo/ui-date-picker-demo.module';
import { UiDialogDemoComponent } from './ui-dialog/demo/ui-dialog-demo.component';
import { UiDialogDemoModule } from './ui-dialog/demo/ui-dialog-demo.module';
import { UiDrawerDemoComponent } from './ui-drawer/demo/ui-drawer-demo.component';
import { UiDrawerDemoModule } from './ui-drawer/demo/ui-drawer-demo.module';
import { UiDropdownDemoComponent } from './ui-dropdown/demo/ui-dropdown-demo.component';
import { UiDropdownDemoModule } from './ui-dropdown/demo/ui-dropdown-demo.module';
import { UiExtSelectDemoComponent } from './ui-ext-select/demo/ui-ext-select-demo.component';
import { UiExtSelectDemoModule } from './ui-ext-select/demo/ui-ext-select-demo.module';
import { UiFileDemoComponent } from './ui-file/demo/ui-file-demo.component';
import { UiFileDemoModule } from './ui-file/demo/ui-file-demo.module';
import { UiFormDemoComponent } from './ui-form/demo/ui-form-demo.component';
import { UiFormDemoModule } from './ui-form/demo/ui-form-demo.module';
import { UiLoadingBarDemoComponent } from './ui-loading-bar/demo/ui-loading-bar-demo.component';
import { UiLoadingBarDemoModule } from './ui-loading-bar/demo/ui-loading-bar-demo.module';
import { UiModalDemoComponent } from './ui-modal/demo/ui-modal-demo.component';
import { UiModalDemoModule } from './ui-modal/demo/ui-modal-demo.module';
import { UiNotificationDemoComponent } from './ui-notification/demo/ui-notification-demo.component';
import { UiNotificationDemoModule } from './ui-notification/demo/ui-notification-demo.module';
import { UiPopupDemoComponent } from './ui-popup/demo/ui-popup-demo.component';
import { UiPopupDemoModule } from './ui-popup/demo/ui-popup-demo.module';
import { UiRadioDemoComponent } from './ui-radio/demo/ui-radio-demo.component';
import { UiRadioDemoModule } from './ui-radio/demo/ui-radio-demo.module';
import { UiRatingDemoComponent } from './ui-rating/demo/ui-rating-demo.component';
import { UiRatingDemoModule } from './ui-rating/demo/ui-rating-demo.module';
import { UiScrollDemoComponent } from './ui-scroll/demo/ui-scroll-demo.component';
import { UiScrollDemoModule } from './ui-scroll/demo/ui-scroll-demo.module';
import { UiSelectDemoComponent } from './ui-select/demo/ui-select-demo.component';
import { UiSelectDemoModule } from './ui-select/demo/ui-select-demo.module';
import { UiSliderDemoComponent } from './ui-slider/demo/ui-slider-demo.component';
import { UiSliderDemoModule } from './ui-slider/demo/ui-slider-demo.module';
import { UiTabsDemoComponent } from './ui-tabs/demo/ui-tabs-demo.component';
import { UiTabsDemoModule } from './ui-tabs/demo/ui-tabs-demo.module';
import { UiTextDemoComponent } from './ui-text/demo/ui-text-demo.component';
import { UiTextDemoModule } from './ui-text/demo/ui-text-demo.module';
import { UiToggleDemoComponent } from './ui-toggle/demo/ui-toggle-demo.component';
import { UiToggleDemoModule } from './ui-toggle/demo/ui-toggle-demo.module';
import { UiTooltipDemoComponent } from './ui-tooltip/demo/ui-tooltip-demo.component';
import { UiTooltipDemoModule } from './ui-tooltip/demo/ui-tooltip-demo.module';
import { UiVerticalMenuDemoComponent } from './ui-vertical-menu/demo/ui-vertical-menu-demo.component';
import { UiVerticalMenuDemoModule } from './ui-vertical-menu/demo/ui-vertical-menu-demo.module';

/**
 * Provides correct demo-components linking for website.
 */
export const demoComponentsRef: [string, Type<any>][] = [
  ['UiAccordionDemoComponent', UiAccordionDemoComponent],
  ['UiAlertDemoComponent', UiAlertDemoComponent],
  ['UiAutocompleteDemoComponent', UiAutocompleteDemoComponent],
  ['UiBadgeDemoComponent', UiBadgeDemoComponent],
  ['UiBreadcrumbsDemoComponent', UiBreadcrumbsDemoComponent],
  ['UiButtonDemoComponent', UiButtonDemoComponent],
  ['UiCarouselDemoComponent', UiCarouselDemoComponent],
  ['UiCheckboxDemoComponent', UiCheckboxDemoComponent],
  ['UiCustomSelectDemoComponent', UiCustomSelectDemoComponent],
  ['UiDatePickerDemoComponent', UiDatePickerDemoComponent],
  ['UiDialogDemoComponent', UiDialogDemoComponent],
  ['UiDrawerDemoComponent', UiDrawerDemoComponent],
  ['UiDropdownDemoComponent', UiDropdownDemoComponent],
  ['UiExtSelectDemoComponent', UiExtSelectDemoComponent],
  ['UiFileDemoComponent', UiFileDemoComponent],
  ['UiFormDemoComponent', UiFormDemoComponent],
  ['UiLoadingBarDemoComponent', UiLoadingBarDemoComponent],
  ['UiModalDemoComponent', UiModalDemoComponent],
  ['UiNotificationDemoComponent', UiNotificationDemoComponent],
  ['UiPopupDemoComponent', UiPopupDemoComponent],
  ['UiRadioDemoComponent', UiRadioDemoComponent],
  ['UiRatingDemoComponent', UiRatingDemoComponent],
  ['UiScrollDemoComponent', UiScrollDemoComponent],
  ['UiSelectDemoComponent', UiSelectDemoComponent],
  ['UiSliderDemoComponent', UiSliderDemoComponent],
  ['UiTabsDemoComponent', UiTabsDemoComponent],
  ['UiTextDemoComponent', UiTextDemoComponent],
  ['UiToggleDemoComponent', UiToggleDemoComponent],
  ['UiTooltipDemoComponent', UiTooltipDemoComponent],
  ['UiVerticalMenuDemoComponent', UiVerticalMenuDemoComponent],
];

@NgModule({
  imports: [],
  exports: [
    UiAccordionDemoModule,
    UiAlertDemoModule,
    UiAutocompleteDemoModule,
    UiBadgeDemoModule,
    UiBreadcrumbsDemoModule,
    UiButtonDemoModule,
    UiCarouselDemoModule,
    UiCheckboxDemoModule,
    UiCustomSelectDemoModule,
    UiDatePickerDemoModule,
    UiDialogDemoModule,
    UiDrawerDemoModule,
    UiDropdownDemoModule,
    UiExtSelectDemoModule,
    UiFileDemoModule,
    UiFormDemoModule,
    UiLoadingBarDemoModule,
    UiModalDemoModule,
    UiNotificationDemoModule,
    UiPopupDemoModule,
    UiRadioDemoModule,
    UiRatingDemoModule,
    UiScrollDemoModule,
    UiSelectDemoModule,
    UiSliderDemoModule,
    UiTabsDemoModule,
    UiTextDemoModule,
    UiToggleDemoModule,
    UiTooltipDemoModule,
    UiVerticalMenuDemoModule,
  ],
})
export class DemoModule {
}
