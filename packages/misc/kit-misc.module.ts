import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '@ngx-kit/core';

import { KitBadgeComponent } from './kit-badge/kit-badge.component';
import { KitDividerComponent } from './kit-divider/kit-divider.component';
import { KitPopoverComponent } from './kit-popover/kit-popover.component';
import { KitTagComponent } from './kit-tag/kit-tag.component';
import { KitTooltipDirective } from './kit-tooltip/kit-tooltip.directive';
import { KitTooltipViewComponent } from './kit-tooltip/kit-tooltip-view.component';
import { KitAccordionComponent } from './kit-accordion/kit-accordion.component';
import { KitAccordionPanelComponent } from './kit-accordion/kit-accordion-panel.component';
import { KitTabsComponent } from './kit-tabs/kit-tabs.component';
import { KitTabsPanelComponent } from './kit-tabs/kit-tabs-panel.component';

const exported = [
  KitAccordionComponent,
  KitAccordionPanelComponent,
  KitBadgeComponent,
  KitDividerComponent,
  KitPopoverComponent,
  KitTabsComponent,
  KitTabsPanelComponent,
  KitTagComponent,
  KitTooltipDirective,
];

const entry = [
  KitTooltipViewComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
    ...entry,
  ],
  entryComponents: entry,
  providers: []
})
export class KitMiscModule {
}
