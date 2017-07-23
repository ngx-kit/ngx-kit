import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitAccordionModule } from '../accordion/kit-accordion.module';
import { KitAutoCompleteModule } from '../auto-complete/kit-auto-complete.module';
import { KitBadgeModule } from '../badge/kit-badge.module';
import { KitBreadcrumbModule } from '../breadcrumd/kit-breadcrumb.module';
import { KitButtonsModule } from '../buttons/kit-buttons.module';
import { KitCheckboxModule } from '../checkbox/kit-checkbox.module';
import { KitCoreModule } from '../core/kit-core.module';
import { KitDatePickerModule } from '../date-picker/kit-date-picker.module';
import { KitDefaultThemeModule } from '../default-theme/kit-default-theme.module';
import { KitDividerModule } from '../divider/kit-divider.module';
import { KitDropdownMenuModule } from '../dropdown-menu/kit-dropdown-menu.module';
import { KitFormModule } from '../form/kit-form.module';
import { KitIconsModule } from '../icons/kit-icons.module';
import { KitInputModule } from '../input/kit-input.module';
import { KitLayoutModule } from '../layout/kit-layout.module';
import { KitMathInputModule } from '../math-input/kit-math-input.module';
import { KitMenuModule } from '../menu/kit-menu.module';
import { KitModalModule } from '../modal/kit-modal.module';
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
  KitDefaultThemeModule,
];
const simpleModules = [
  KitAccordionModule,
  KitAutoCompleteModule,
  KitBadgeModule,
  KitBreadcrumbModule,
  KitButtonsModule,
  KitCheckboxModule,
  KitDatePickerModule,
  KitDividerModule,
  KitDropdownMenuModule,
  KitFormModule,
  KitIconsModule,
  KitInputModule,
  KitLayoutModule,
  KitMathInputModule,
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
    KitDefaultThemeModule.forRoot(),
    ...simpleModules,
  ],
  declarations: [],
  providers: [],
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
