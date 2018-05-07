import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiAccordionModule } from './ui-accordion/ui-accordion.module';
import { UiAlertModule } from './ui-alert/ui-alert.module';
import { UiAutocompleteModule } from './ui-autocomplete/ui-autocomplete.module';
import { UiBadgeModule } from './ui-badge/ui-badge.module';
import { UiBreadcrumbsModule } from './ui-breadcrumbs/ui-breadcrumbs.module';
import { UiButtonModule } from './ui-button/ui-button.module';
import { UiCarouselModule } from './ui-carousel/ui-carousel.module';
import { UiCheckboxModule } from './ui-checkbox/ui-checkbox.module';
import { UiCustomSelectModule } from './ui-custom-select/ui-custom-select.module';
import { UiDatePickerModule } from './ui-date-picker/ui-date-picker.module';
import { UiFormModule } from './ui-form/ui-form.module';
import { UiLoadingBarModule } from './ui-loading-bar/ui-loading-bar.module';
import { UiModalModule } from './ui-modal/ui-modal.module';
import { UiNotificationModule } from './ui-notification/ui-notification.module';
import { UiRadioModule } from './ui-radio/ui-radio.module';
import { UiRatingModule } from './ui-rating/ui-rating.module';
import { UiSelectModule } from './ui-select/ui-select.module';
import { UiVerticalMenuModule } from './ui-vertical-menu/ui-vertical-menu.module';
import { UiSliderModule } from './ui-slider/ui-slider.module';
import { UiTabsModule } from './ui-tabs/ui-tabs.module';
import { UiTextModule } from './ui-text/ui-text.module';
import { UiToggleModule } from './ui-toggle/ui-toggle.module';
import { UiTooltipModule } from './ui-tooltip/ui-tooltip.module';

const lib = [
  UiAccordionModule,
  UiAlertModule,
  UiAutocompleteModule,
  UiBadgeModule,
  UiBreadcrumbsModule,
  UiButtonModule,
  UiCarouselModule,
  UiCheckboxModule,
  UiCustomSelectModule,
  UiDatePickerModule,
  UiFormModule,
  UiLoadingBarModule,
  UiModalModule,
  UiNotificationModule,
  UiRadioModule,
  UiRatingModule,
  UiSelectModule,
  UiVerticalMenuModule,
  UiSliderModule,
  UiTabsModule,
  UiTextModule,
  UiToggleModule,
  UiTooltipModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...lib,
  ],
  declarations: [],
  exports: [
    ...lib,
  ],
})
export class CollectionLibModule {
}
