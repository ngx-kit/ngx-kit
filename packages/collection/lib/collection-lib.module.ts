import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiAccordionModule } from '../../ui/ui-accordion/src/ui-accordion/ui-accordion.component';
import { UiButtonModule } from '../../ui/ui-button/src/ui-button.module';
import { UiCarouselModule } from '../../ui/ui-carousel/src/ui-carousel.module';
import { UiCheckboxModule } from '../../ui/ui-checkbox/src/ui-checkbox.module';
import { UiDatePickerModule } from '../../ui/ui-date-picker/src/ui-date-picker.module';
import { UiDrawerModule } from '../../ui/ui-drawer/src/ui-drawer.module';
import { UiDropdownModule } from '../../ui/ui-dropdown/src/ui-dropdown.module';
import { UiExtSelectModule } from '../../ui/ui-ext-select/src/ui-ext-select.module';
import { UiFileModule } from '../../ui/ui-file/src/ui-file.module';
import { UiFormModule } from '../../ui/ui-form/src/ui-form.module';
import { UiLoadingBarModule } from '../../ui/ui-loading-bar/src/ui-loading-bar.module';
import { UiModalModule } from '../../ui/ui-modal/src/ui-modal.module';
import { UiNotificationModule } from '../../ui/ui-notification/src/ui-notification.module';
import { UiPopupModule } from '../../ui/ui-popup/src/ui-popup.module';
import { UiRadioModule } from '../../ui/ui-radio/src/ui-radio.module';
import { UiScrollModule } from '../../ui/ui-scroll/src/ui-scroll.module';
import { UiSelectModule } from '../../ui/ui-select/src/ui-select.module';
import { UiVerticalMenuModule } from '../../ui/ui-vertical-menu/src/ui-vertical-menu.module';
import { UiSliderModule } from '../../ui/ui-slider/src/ui-slider.module';
import { UiTabsModule } from '../../ui/ui-tabs/src/ui-tabs.module';
import { UiTextModule } from '../../ui/ui-text/src/ui-text.module';
import { UiToggleModule } from '../../ui/ui-toggle/src/ui-toggle.module';
import { UiTooltipModule } from '../../ui/ui-tooltip/src/ui-tooltip.module';

const lib = [
  UiAccordionModule,
  UiButtonModule,
  UiCarouselModule,
  UiCheckboxModule,
  UiDatePickerModule,
  UiDrawerModule,
  UiDropdownModule,
  UiExtSelectModule,
  UiFileModule,
  UiFormModule,
  UiLoadingBarModule,
  UiModalModule,
  UiNotificationModule,
  UiPopupModule,
  UiRadioModule,
  UiScrollModule,
  UiSelectModule,
  UiSliderModule,
  UiVerticalMenuModule,
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
