import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideModule } from '@ngx-kit/ngx-kit';
import { KitTabsContentComponent } from './kit-tabs-content/kit-tabs-content.component';
import { KitTabsNavComponent } from './kit-tabs-nav/kit-tabs-nav.component';
import { KitTabsTabComponent } from './kit-tabs-tab/kit-tabs-tab.component';
import { KitTabsComponent } from './kit-tabs/kit-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
  ],
  exports: [
    KitTabsComponent,
    KitTabsNavComponent,
    KitTabsTabComponent,
    KitTabsContentComponent,
  ],
  declarations: [
    KitTabsComponent,
    KitTabsNavComponent,
    KitTabsTabComponent,
    KitTabsContentComponent,
  ],
})
export class KitTabsModule {
}
