import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCoreModule } from '@ngx-kit/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitAccordionPanelComponent } from './kit-accordion/kit-accordion-panel.component';
import { KitAccordionComponent } from './kit-accordion/kit-accordion.component';
import { KitBadgeComponent } from './kit-badge/kit-badge.component';
import { KitDividerComponent } from './kit-divider/kit-divider.component';
import { KitPopoverComponent } from './kit-popover/kit-popover.component';
import { KitTabsPanelComponent } from './kit-tabs/kit-tabs-panel.component';
import { KitTabsComponent } from './kit-tabs/kit-tabs.component';
import { KitTagComponent } from './kit-tag/kit-tag.component';
import { KitTooltipViewComponent } from './kit-tooltip/kit-tooltip-view.component';
import { KitTooltipDirective } from './kit-tooltip/kit-tooltip.directive';

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
  providers: [],
})
export class KitMiscModule {
}
