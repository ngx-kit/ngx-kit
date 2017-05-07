import { NgModule } from '@angular/core';

import { KitTabsComponent } from './kit-tabs/kit-tabs.component';
import { KitTabsService } from './kit-tabs.service';

@NgModule({
  imports: [],
  exports: [
    KitTabsComponent,
  ],
  declarations: [
    KitTabsComponent,
  ],
  providers: [
    KitTabsService,
  ]
})
export class KitTabsModule {
}
