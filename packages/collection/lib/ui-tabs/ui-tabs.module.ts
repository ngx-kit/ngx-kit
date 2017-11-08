import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideModule } from '@ngx-kit/core';
import { UiTabsContentComponent } from './ui-tabs-content/ui-tabs-content.component';
import { UiTabsNavComponent } from './ui-tabs-nav/ui-tabs-nav.component';
import { UiTabsTabComponent } from './ui-tabs-tab/ui-tabs-tab.component';
import { UiTabsComponent } from './ui-tabs/ui-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
  ],
  exports: [
    UiTabsComponent,
    UiTabsNavComponent,
    UiTabsTabComponent,
    UiTabsContentComponent,
  ],
  declarations: [
    UiTabsComponent,
    UiTabsNavComponent,
    UiTabsTabComponent,
    UiTabsContentComponent,
  ],
})
export class UiTabsModule {
}
