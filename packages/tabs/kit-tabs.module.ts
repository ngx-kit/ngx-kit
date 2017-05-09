import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitTabsComponent } from './kit-tabs/kit-tabs.component';
import { KitTabComponent } from './kit-tab/kit-tab.component';
import { KitTabsService } from './kit-tabs.service';

const external = [
  KitTabsComponent,
  KitTabComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: external,
  declarations: [
    ...external,
  ],
  providers: [
    KitTabsService,
  ]
})
export class KitTabsModule {
}
