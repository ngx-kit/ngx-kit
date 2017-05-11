import { NgModule } from '@angular/core';

import { KitTooltipDirective } from './kit-tooltip/kit-tooltip.directive';
import { KitTooltipViewComponent } from './kit-tooltip-view/kit-tooltip-view.component';
import { KitTooltipService } from './kit-tooltip.service';

const external = [
  KitTooltipDirective,
];

const entry = [
  KitTooltipViewComponent,
];

@NgModule({
  imports: [],
  exports: external,
  declarations: [
    ...external,
    ...entry,
  ],
  entryComponents: entry,
  providers: [
    KitTooltipService,
  ]
})
export class KitTooltipModule {
}
