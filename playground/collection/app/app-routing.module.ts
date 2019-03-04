import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiAccordionDemoComponent } from '../../../packages/ui/ui-accordion/src/demo/ui-accordion-demo.component';
import { UiAlertDemoComponent } from '../../../packages/ui/ui-alert/src/demo/ui-alert-demo.component';
import { UiBadgeDemoComponent } from '../../../packages/ui/ui-badge/src/demo/ui-badge-demo.component';
import { UiBreadcrumbsDemoComponent } from '../../../packages/ui/ui-breadcrumbs/src/demo/ui-breadcrumbs-demo.component';
import { UiButtonDemoComponent } from '../../../packages/ui/ui-button/src/demo/ui-button-demo.component';
import { UiCarouselDemoComponent } from '../../../packages/ui/ui-carousel/src/demo/ui-carousel-demo.component';
import { UiCheckboxDemoComponent } from '../../../packages/ui/ui-checkbox/src/demo/ui-checkbox-demo.component';
import { UiDatePickerDemoComponent } from '../../../packages/ui/ui-date-picker/src/demo/ui-date-picker-demo.component';
import { UiDialogDemoComponent } from '../../../packages/ui/ui-dialog/src/demo/ui-dialog-demo.component';
import { UiDrawerDemoComponent } from '../../../packages/ui/ui-drawer/src/demo/ui-drawer-demo.component';
import { UiDropdownDemoComponent } from '../../../packages/ui/ui-dropdown/src/demo/ui-dropdown-demo.component';
import { UiExtSelectDemoComponent } from '../../../packages/ui/ui-ext-select/src/demo/ui-ext-select-demo.component';
import { UiFileDemoComponent } from '../../../packages/ui/ui-file/src/demo/ui-file-demo.component';
import { UiFormDemoComponent } from '../../../packages/ui/ui-form/src/demo/ui-form-demo.component';
import { UiLoadingBarDemoComponent } from '../../../packages/ui/ui-loading-bar/src/demo/ui-loading-bar-demo.component';
import { UiModalDemoComponent } from '../../../packages/ui/ui-modal/src/demo/ui-modal-demo.component';
import { UiNotificationDemoComponent } from '../../../packages/ui/ui-notification/src/demo/ui-notification-demo.component';
import { UiPopupDemoComponent } from '../../../packages/ui/ui-popup/src/demo/ui-popup-demo.component';
import { UiRadioDemoComponent } from '../../../packages/ui/ui-radio/src/demo/ui-radio-demo.component';
import { UiRatingDemoComponent } from '../../../packages/ui/ui-rating/src/demo/ui-rating-demo.component';
import { UiScrollDemoComponent } from '../../../packages/ui/ui-scroll/src/demo/ui-scroll-demo.component';
import { UiSelectDemoComponent } from '../../../packages/ui/ui-select/src/demo/ui-select-demo.component';
import { UiSliderDemoComponent } from '../../../packages/ui/ui-slider/src/demo/ui-slider-demo.component';
import { UiTabsDemoComponent } from '../../../packages/ui/ui-tabs/src/demo/ui-tabs-demo.component';
import { UiTextDemoComponent } from '../../../packages/ui/ui-text/src/demo/ui-text-demo.component';
import { UiToggleDemoComponent } from '../../../packages/ui/ui-toggle/src/demo/ui-toggle-demo.component';
import { UiTooltipDemoComponent } from '../../../packages/ui/ui-tooltip/src/demo/ui-tooltip-demo.component';
import { UiVerticalMenuDemoComponent } from '../../../packages/ui/ui-vertical-menu/src/demo/ui-vertical-menu-demo.component';

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
    path: 'ui-ext-select',
    component: UiExtSelectDemoComponent,
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
