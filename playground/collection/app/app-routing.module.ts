import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiAccordionDemoComponent } from '../../../packages/collection/lib/ui-accordion/demo/ui-accordion-demo.component';
import { UiAlertDemoComponent } from '../../../packages/collection/lib/ui-alert/demo/ui-alert-demo.component';
import { UiAutocompleteDemoComponent } from '../../../packages/collection/lib/ui-autocomplete/demo/ui-autocomplete-demo.component';
import { UiBadgeDemoComponent } from '../../../packages/collection/lib/ui-badge/demo/ui-badge-demo.component';
import { UiBreadcrumbsDemoComponent } from '../../../packages/collection/lib/ui-breadcrumbs/demo/ui-breadcrumbs-demo.component';
import { UiButtonDemoComponent } from '../../../packages/collection/lib/ui-button/demo/ui-button-demo.component';
import { UiCarouselDemoComponent } from '../../../packages/collection/lib/ui-carousel/demo/ui-carousel-demo.component';
import { UiCheckboxDemoComponent } from '../../../packages/collection/lib/ui-checkbox/demo/ui-checkbox-demo.component';
import { UiCustomSelectDemoComponent } from '../../../packages/collection/lib/ui-custom-select/demo/ui-custom-select-demo.component';
import { UiDatePickerDemoComponent } from '../../../packages/collection/lib/ui-date-picker/demo/ui-date-picker-demo.component';
import { UiDialogDemoComponent } from '../../../packages/collection/lib/ui-dialog/demo/ui-dialog-demo.component';
import { UiDrawerDemoComponent } from '../../../packages/collection/lib/ui-drawer/demo/ui-drawer-demo.component';
import { UiDropdownDemoComponent } from '../../../packages/collection/lib/ui-dropdown/demo/ui-dropdown-demo.component';
import { UiFileDemoComponent } from '../../../packages/collection/lib/ui-file/demo/ui-file-demo.component';
import { UiFormDemoComponent } from '../../../packages/collection/lib/ui-form/demo/ui-form-demo.component';
import { UiLoadingBarDemoComponent } from '../../../packages/collection/lib/ui-loading-bar/demo/ui-loading-bar-demo.component';
import { UiModalDemoComponent } from '../../../packages/collection/lib/ui-modal/demo/ui-modal-demo.component';
import { UiNotificationDemoComponent } from '../../../packages/collection/lib/ui-notification/demo/ui-notification-demo.component';
import { UiPopupDemoComponent } from '../../../packages/collection/lib/ui-popup/demo/ui-popup-demo.component';
import { UiRadioDemoComponent } from '../../../packages/collection/lib/ui-radio/demo/ui-radio-demo.component';
import { UiRatingDemoComponent } from '../../../packages/collection/lib/ui-rating/demo/ui-rating-demo.component';
import { UiScrollDemoComponent } from '../../../packages/collection/lib/ui-scroll/demo/ui-scroll-demo.component';
import { UiSelectDemoComponent } from '../../../packages/collection/lib/ui-select/demo/ui-select-demo.component';
import { UiSliderDemoComponent } from '../../../packages/collection/lib/ui-slider/demo/ui-slider-demo.component';
import { UiTabsDemoComponent } from '../../../packages/collection/lib/ui-tabs/demo/ui-tabs-demo.component';
import { UiTextDemoComponent } from '../../../packages/collection/lib/ui-text/demo/ui-text-demo.component';
import { UiToggleDemoComponent } from '../../../packages/collection/lib/ui-toggle/demo/ui-toggle-demo.component';
import { UiTooltipDemoComponent } from '../../../packages/collection/lib/ui-tooltip/demo/ui-tooltip-demo.component';
import { UiVerticalMenuDemoComponent } from '../../../packages/collection/lib/ui-vertical-menu/demo/ui-vertical-menu-demo.component';

const routes: Routes = [
  {
    path: 'ui-accordion',
    component: UiAccordionDemoComponent,
  },
  {
    path: 'ui-alert',
    component: UiAlertDemoComponent,
  },
  {
    path: 'ui-autocomplete',
    component: UiAutocompleteDemoComponent,
  },
  {
    path: 'ui-badge',
    component: UiBadgeDemoComponent,
  },
  {
    path: 'ui-breadcrumbs',
    component: UiBreadcrumbsDemoComponent,
  },
  {
    path: 'ui-button',
    component: UiButtonDemoComponent,
  },
  {
    path: 'ui-carousel',
    component: UiCarouselDemoComponent,
  },
  {
    path: 'ui-checkbox',
    component: UiCheckboxDemoComponent,
  },
  {
    path: 'ui-custom-select',
    component: UiCustomSelectDemoComponent,
  },
  {
    path: 'ui-date-picker',
    component: UiDatePickerDemoComponent,
  },
  {
    path: 'ui-dialog',
    component: UiDialogDemoComponent,
  },
  {
    path: 'ui-drawer',
    component: UiDrawerDemoComponent,
  },
  {
    path: 'ui-dropdown',
    component: UiDropdownDemoComponent,
  },
  {
    path: 'ui-file',
    component: UiFileDemoComponent,
  },
  {
    path: 'ui-form',
    component: UiFormDemoComponent,
  },
  {
    path: 'ui-loading-bar',
    component: UiLoadingBarDemoComponent,
  },
  {
    path: 'ui-modal',
    component: UiModalDemoComponent,
  },
  {
    path: 'ui-notification',
    component: UiNotificationDemoComponent,
  },
  {
    path: 'ui-popup',
    component: UiPopupDemoComponent,
  },
  {
    path: 'ui-radio',
    component: UiRadioDemoComponent,
  },
  {
    path: 'ui-rating',
    component: UiRatingDemoComponent,
  },
  {
    path: 'ui-scroll',
    component: UiScrollDemoComponent,
  },
  {
    path: 'ui-select',
    component: UiSelectDemoComponent,
  },
  {
    path: 'ui-slider',
    component: UiSliderDemoComponent,
  },
  {
    path: 'ui-tabs',
    component: UiTabsDemoComponent,
  },
  {
    path: 'ui-text',
    component: UiTextDemoComponent,
  },
  {
    path: 'ui-toggle',
    component: UiToggleDemoComponent,
  },
  {
    path: 'ui-tooltip',
    component: UiTooltipDemoComponent,
  },
  {
    path: 'ui-vertical-menu',
    component: UiVerticalMenuDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
