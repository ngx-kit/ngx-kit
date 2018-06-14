import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Type } from '@angular/core/src/type';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionLibModule } from './collection-lib.module';
import { UiAccordionDemoComponent } from './ui-accordion/demo/ui-accordion-demo.component';
import { UiAlertDemoComponent } from './ui-alert/demo/ui-alert-demo.component';
import { UiAutocompleteDemoComponent } from './ui-autocomplete/demo/ui-autocomplete-demo.component';
import { UiBadgeDemoComponent } from './ui-badge/demo/ui-badge-demo.component';
import { UiBreadcrumbsDemoComponent } from './ui-breadcrumbs/demo/ui-breadcrumbs-demo.component';
import { UiButtonDemoComponent } from './ui-button/demo/ui-button-demo.component';
import { UiCarouselDemoComponent } from './ui-carousel/demo/ui-carousel-demo.component';
import { UiCheckboxDemoComponent } from './ui-checkbox/demo/ui-checkbox-demo.component';
import { UiCustomSelectDemoComponent } from './ui-custom-select/demo/ui-custom-select-demo.component';
import { UiDatePickerDemoComponent } from './ui-date-picker/demo/ui-date-picker-demo.component';
import { UiDrawerDemoComponent } from './ui-drawer/demo/ui-drawer-demo.component';
import { UiFormDemoComponent } from './ui-form/demo/ui-form-demo.component';
import { UiLoadingBarDemoComponent } from './ui-loading-bar/demo/ui-loading-bar-demo.component';
import { UiModalDemoBindingModalComponent } from './ui-modal/demo/ui-modal-demo-binding-modal.component';
import { UiModalDemoCanCloseModalComponent } from './ui-modal/demo/ui-modal-demo-can-close-modal.component';
import { UiModalDemoModalComponent } from './ui-modal/demo/ui-modal-demo-modal.component';
import { UiModalDemoComponent } from './ui-modal/demo/ui-modal-demo.component';
import { UiNotificationDemoComponent } from './ui-notification/demo/ui-notification-demo.component';
import { UiPopupDemoComponent } from './ui-popup/demo/ui-popup-demo.component';
import { UiRadioDemoComponent } from './ui-radio/demo/ui-radio-demo.component';
import { UiRatingDemoComponent } from './ui-rating/demo/ui-rating-demo.component';
import { UiScrollDemoComponent } from './ui-scroll/demo/ui-scroll-demo.component';
import { UiSelectDemoComponent } from './ui-select/demo/ui-select-demo.component';
import { UiSliderDemoComponent } from './ui-slider/demo/ui-slider-demo.component';
import { UiTabsDemoComponent } from './ui-tabs/demo/ui-tabs-demo.component';
import { UiTextDemoComponent } from './ui-text/demo/ui-text-demo.component';
import { UiToggleDemoComponent } from './ui-toggle/demo/ui-toggle-demo.component';
import { UiTooltipDemoComponent } from './ui-tooltip/demo/ui-tooltip-demo.component';
import { UiVerticalMenuDemoComponent } from './ui-vertical-menu/demo/ui-vertical-menu-demo.component';

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
  ['UiDrawerDemoComponent', UiDrawerDemoComponent],
  ['UiFormDemoComponent', UiFormDemoComponent],
  ['UiLoadingBarDemoComponent', UiLoadingBarDemoComponent],
  ['UiNotificationDemoComponent', UiNotificationDemoComponent],
  ['UiModalDemoComponent', UiModalDemoComponent],
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

// Map from demoComponentsRef is not working here: get `Cannot read property 'members' of null` on first build run
export const demoComponents = [
  UiAccordionDemoComponent,
  UiAlertDemoComponent,
  UiAutocompleteDemoComponent,
  UiBadgeDemoComponent,
  UiBreadcrumbsDemoComponent,
  UiButtonDemoComponent,
  UiCarouselDemoComponent,
  UiCheckboxDemoComponent,
  UiCustomSelectDemoComponent,
  UiDatePickerDemoComponent,
  UiDrawerDemoComponent,
  UiFormDemoComponent,
  UiLoadingBarDemoComponent,
  UiNotificationDemoComponent,
  UiModalDemoComponent,
  UiPopupDemoComponent,
  UiRadioDemoComponent,
  UiRatingDemoComponent,
  UiScrollDemoComponent,
  UiSelectDemoComponent,
  UiSliderDemoComponent,
  UiTabsDemoComponent,
  UiTextDemoComponent,
  UiToggleDemoComponent,
  UiTooltipDemoComponent,
  UiVerticalMenuDemoComponent,
];

const demoEntries = [
  UiModalDemoModalComponent,
  UiModalDemoBindingModalComponent,
  UiModalDemoCanCloseModalComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollectionLibModule,
  ],
  declarations: [
    ...demoComponents,
    ...demoEntries,
  ],
  exports: [
    ...demoComponents,
  ],
  entryComponents: [
    ...demoComponents,
    ...demoEntries,
  ],
})
export class DemoModule {
}
