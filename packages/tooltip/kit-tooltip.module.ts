import { NgModule } from '@angular/core';

import { KitTooltipDirective } from './kit-tooltip/kit-tooltip.directive';
import { KitTooltipViewComponent } from './kit-tooltip-view/kit-tooltip-view.component';

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
  providers: []
})
export class KitTooltipModule {
}
