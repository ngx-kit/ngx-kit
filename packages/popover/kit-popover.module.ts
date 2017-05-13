import { NgModule } from '@angular/core';

import { KitPopoverComponent } from './kit-popover/kit-popover.component';
import { KitPopoverService } from './kit-popover.service';

@NgModule({
  imports: [],
  exports: [
    KitPopoverComponent,
  ],
  declarations: [
    KitPopoverComponent,
  ],
  providers: [
    KitPopoverService,
  ]
})
export class KitPopoverModule {
}
