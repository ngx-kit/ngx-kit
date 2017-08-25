import { NgModule } from '@angular/core';
import { BemClassGenStrategy, ClassGenStategy, StylerModule } from '@ngx-kit/styler';
import { KitAccordionModule } from '../accordion/kit-accordion.module';
import { KitAlertModule } from '../alert/kit-alert.module';
import { KitAutoCompleteModule } from '../auto-complete/kit-auto-complete.module';
import { KitBadgeModule } from '../badge/kit-badge.module';
import { KitBreadcrumbModule } from '../breadcrumd/kit-breadcrumb.module';
import { KitButtonModule } from '../button/kit-button.module';
import { KitCheckboxModule } from '../checkbox/kit-checkbox.module';
import { KitColorPickerModule } from '../color-picker/kit-color-picker.module';
import { KitCoreModule } from '../core/kit-core.module';
import { KitDatePickerModule } from '../date-picker/kit-date-picker.module';
import { KitDropdownMenuModule } from '../dropdown-menu/kit-dropdown-menu.module';
import { KitFormModule } from '../form/kit-form.module';
import { KitIconsModule } from '../icons/kit-icons.module';
import { KitInputModule } from '../input/kit-input.module';
import { KitLoadingBarModule } from '../loading-bar/kit-loading-bar.module';
import { KitMenuModule } from '../menu/kit-menu.module';
import { KitModalModule } from '../modal/kit-modal.module';
import { KitNotificationModule } from '../notification/kit-notification.module';
import { KitPaginationModule } from '../pagination/kit-pagination.module';
import { KitPopoverModule } from '../popover/kit-popover.module';
import { KitRadioModule } from '../radio/kit-radio.module';
import { KitSelectModule } from '../select/kit-select.module';
import { KitTabsModule } from '../tabs/kit-tabs.module';
import { KitTagModule } from '../tag/kit-tag.module';
import { KitTextareaModule } from '../textarea/kit-textarea.module';
import { KitToggleModule } from '../toggle/kit-toggle.module';
import { KitTooltipModule } from '../tooltip/kit-tooltip.module';

const initableModules = [
  StylerModule,
  KitCoreModule,
  KitNotificationModule,
];
const simpleModules = [
  KitAccordionModule,
  KitAlertModule,
  KitAutoCompleteModule,
  KitBadgeModule,
  KitBreadcrumbModule,
  KitButtonModule,
  KitCheckboxModule,
  KitColorPickerModule,
  KitDatePickerModule,
  KitDropdownMenuModule,
  KitFormModule,
  KitIconsModule,
  KitInputModule,
  KitLoadingBarModule,
  KitMenuModule,
  KitModalModule,
  KitPaginationModule,
  KitPopoverModule,
  KitRadioModule,
  KitSelectModule,
  KitTabsModule,
  KitTagModule,
  KitTextareaModule,
  KitToggleModule,
  KitTooltipModule,
];

@NgModule({
  imports: [
    StylerModule.forRoot(),
    KitCoreModule.forRoot(),
    KitNotificationModule.forRoot(),
    ...simpleModules,
  ],
  declarations: [],
  providers: [
    {
      provide: ClassGenStategy,
      useClass: BemClassGenStrategy,
    },
  ],
  exports: [
    ...initableModules,
    ...simpleModules,
  ],
})
export class KitFullForRootModule {
}

@NgModule({
  imports: [
    ...initableModules,
    ...simpleModules,
  ],
  declarations: [],
  providers: [],
  exports: [
    ...initableModules,
    ...simpleModules,
  ],
})
export class KitFullModule {
}

