import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule } from '@ngx-kit/ngx-kit';
import { KitTooltipViewComponent } from './kit-tooltip-view/kit-tooltip-view.component';
import { KitTooltipDirective } from './kit-tooltip/kit-tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
  ],
  exports: [
    KitTooltipDirective,
  ],
  declarations: [
    KitTooltipDirective,
    KitTooltipViewComponent,
  ],
  entryComponents: [
    KitTooltipViewComponent,
  ],
})
export class KitTooltipModule {
}
