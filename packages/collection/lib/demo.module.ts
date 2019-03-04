import { NgModule } from '@angular/core';
import { Type } from '@angular/core/src/type';
import { UiAccordionDemoComponent } from '../../ui/ui-accordion/src/demo/ui-accordion-demo.component';
import { UiAccordionDemoModule } from '../../ui/ui-accordion/src/demo/ui-accordion-demo.module';
import { UiAlertDemoComponent } from '../../ui/ui-alert/src/demo/ui-alert-demo.component';
import { UiAlertDemoModule } from '../../ui/ui-alert/src/demo/ui-alert-demo.module';
import { UiBadgeDemoComponent } from '../../ui/ui-badge/src/demo/ui-badge-demo.component';
import { UiBadgeDemoModule } from '../../ui/ui-badge/src/demo/ui-badge-demo.module';
import { UiBreadcrumbsDemoComponent } from '../../ui/ui-breadcrumbs/src/demo/ui-breadcrumbs-demo.component';
import { UiBreadcrumbsDemoModule } from '../../ui/ui-breadcrumbs/src/demo/ui-breadcrumbs-demo.module';
import { UiButtonDemoComponent } from '../../ui/ui-button/src/demo/ui-button-demo.component';
import { UiButtonDemoModule } from '../../ui/ui-button/src/demo/ui-button-demo.module';
import { UiCarouselDemoComponent } from '../../ui/ui-carousel/src/demo/ui-carousel-demo.component';
import { UiCarouselDemoModule } from '../../ui/ui-carousel/src/demo/ui-carousel-demo.module';
import { UiCheckboxDemoComponent } from '../../ui/ui-checkbox/src/demo/ui-checkbox-demo.component';
import { UiCheckboxDemoModule } from '../../ui/ui-checkbox/src/demo/ui-checkbox-demo.module';
import { UiDatePickerDemoComponent } from '../../ui/ui-date-picker/src/demo/ui-date-picker-demo.component';
import { UiDatePickerDemoModule } from '../../ui/ui-date-picker/src/demo/ui-date-picker-demo.module';
import { UiDialogDemoComponent } from '../../ui/ui-dialog/src/demo/ui-dialog-demo.component';
import { UiDialogDemoModule } from '../../ui/ui-dialog/src/demo/ui-dialog-demo.module';
import { UiDrawerDemoComponent } from '../../ui/ui-drawer/src/demo/ui-drawer-demo.component';
import { UiDrawerDemoModule } from '../../ui/ui-drawer/src/demo/ui-drawer-demo.module';
import { UiDropdownDemoComponent } from '../../ui/ui-dropdown/src/demo/ui-dropdown-demo.component';
import { UiDropdownDemoModule } from '../../ui/ui-dropdown/src/demo/ui-dropdown-demo.module';
import { UiExtSelectDemoComponent } from '../../ui/ui-ext-select/src/demo/ui-ext-select-demo.component';
import { UiExtSelectDemoModule } from '../../ui/ui-ext-select/src/demo/ui-ext-select-demo.module';
import { UiFileDemoComponent } from '../../ui/ui-file/src/demo/ui-file-demo.component';
import { UiFileDemoModule } from '../../ui/ui-file/src/demo/ui-file-demo.module';
import { UiFormDemoComponent } from '../../ui/ui-form/src/demo/ui-form-demo.component';
import { UiFormDemoModule } from '../../ui/ui-form/src/demo/ui-form-demo.module';
import { UiLoadingBarDemoComponent } from '../../ui/ui-loading-bar/src/demo/ui-loading-bar-demo.component';
import { UiLoadingBarDemoModule } from '../../ui/ui-loading-bar/src/demo/ui-loading-bar-demo.module';
import { UiModalDemoComponent } from '../../ui/ui-modal/src/demo/ui-modal-demo.component';
import { UiModalDemoModule } from '../../ui/ui-modal/src/demo/ui-modal-demo.module';
import { UiNotificationDemoComponent } from '../../ui/ui-notification/src/demo/ui-notification-demo.component';
import { UiNotificationDemoModule } from '../../ui/ui-notification/src/demo/ui-notification-demo.module';
import { UiPopupDemoComponent } from '../../ui/ui-popup/src/demo/ui-popup-demo.component';
import { UiPopupDemoModule } from '../../ui/ui-popup/src/demo/ui-popup-demo.module';
import { UiRadioDemoComponent } from '../../ui/ui-radio/src/demo/ui-radio-demo.component';
import { UiRadioDemoModule } from '../../ui/ui-radio/src/demo/ui-radio-demo.module';
import { UiRatingDemoComponent } from '../../ui/ui-rating/src/demo/ui-rating-demo.component';
import { UiRatingDemoModule } from '../../ui/ui-rating/src/demo/ui-rating-demo.module';
import { UiScrollDemoComponent } from '../../ui/ui-scroll/src/demo/ui-scroll-demo.component';
import { UiScrollDemoModule } from '../../ui/ui-scroll/src/demo/ui-scroll-demo.module';
import { UiSelectDemoComponent } from '../../ui/ui-select/src/demo/ui-select-demo.component';
import { UiSelectDemoModule } from '../../ui/ui-select/src/demo/ui-select-demo.module';
import { UiSliderDemoComponent } from '../../ui/ui-slider/src/demo/ui-slider-demo.component';
import { UiSliderDemoModule } from '../../ui/ui-slider/src/demo/ui-slider-demo.module';
import { UiTabsDemoComponent } from '../../ui/ui-tabs/src/demo/ui-tabs-demo.component';
import { UiTabsDemoModule } from '../../ui/ui-tabs/src/demo/ui-tabs-demo.module';
import { UiTextDemoComponent } from '../../ui/ui-text/src/demo/ui-text-demo.component';
import { UiTextDemoModule } from '../../ui/ui-text/src/demo/ui-text-demo.module';
import { UiToggleDemoComponent } from '../../ui/ui-toggle/src/demo/ui-toggle-demo.component';
import { UiToggleDemoModule } from '../../ui/ui-toggle/src/demo/ui-toggle-demo.module';
import { UiTooltipDemoComponent } from '../../ui/ui-tooltip/src/demo/ui-tooltip-demo.component';
import { UiTooltipDemoModule } from '../../ui/ui-tooltip/src/demo/ui-tooltip-demo.module';
import { UiVerticalMenuDemoComponent } from '../../ui/ui-vertical-menu/src/demo/ui-vertical-menu-demo.component';
import { UiVerticalMenuDemoModule } from '../../ui/ui-vertical-menu/src/demo/ui-vertical-menu-demo.module';

/**
 * Provides correct demo-components linking for website.
 */
export const demoComponentsRef: [string, Type<any>][] = [
  ['UiAccordionDemoComponent', UiAccordionDemoComponent],
  ['UiAlertDemoComponent', UiAlertDemoComponent],
  ['UiBadgeDemoComponent', UiBadgeDemoComponent],
  ['UiBreadcrumbsDemoComponent', UiBreadcrumbsDemoComponent],
  ['UiButtonDemoComponent', UiButtonDemoComponent],
  ['UiCarouselDemoComponent', UiCarouselDemoComponent],
  ['UiCheckboxDemoComponent', UiCheckboxDemoComponent],
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
    UiBadgeDemoModule,
    UiBreadcrumbsDemoModule,
    UiButtonDemoModule,
    UiCarouselDemoModule,
    UiCheckboxDemoModule,
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
