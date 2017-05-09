import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitTabsComponent } from './kit-tabs/kit-tabs.component';
import { KitTabsPanelComponent } from './kit-tabs-panel/kit-tabs-panel.component';
import { KitTabsService } from './kit-tabs.service';

const external = [
  KitTabsComponent,
  KitTabsPanelComponent,
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
