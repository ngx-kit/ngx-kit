import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideModule } from '@ngx-kit/core';
import { KitTabsContentComponent } from './kit-tabs-content/kit-tabs-content.component';
import { KitTabsNavComponent } from './kit-tabs-nav/kit-tabs-nav.component';
import { KitTabsTabComponent } from './kit-tabs-tab/kit-tabs-tab.component';
import { KitTabsComponent } from './kit-tabs/kit-tabs.component';

const exp = [
  KitTabsComponent,
  KitTabsNavComponent,
  KitTabsTabComponent,
  KitTabsContentComponent,
];

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitTabsModule {
}
