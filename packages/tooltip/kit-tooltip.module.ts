import { NgModule } from '@angular/core';

import { KitTooltipComponent } from './kit-tooltip/kit-tooltip.component';
import { KitTooltipService } from './kit-tooltip.service';

@NgModule({
  imports: [],
  exports: [
    KitTooltipComponent,
  ],
  declarations: [
    KitTooltipComponent,
  ],
  providers: [
    KitTooltipService,
  ]
})
export class KitTooltipModule {
}
