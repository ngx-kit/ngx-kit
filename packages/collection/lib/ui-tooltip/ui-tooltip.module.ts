import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule } from '@ngx-kit/core';
import { UiTooltipViewComponent } from './ui-tooltip-view/ui-tooltip-view.component';
import { UiTooltipDirective } from './ui-tooltip/ui-tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
  ],
  declarations: [
    UiTooltipDirective,
    UiTooltipViewComponent,
  ],
  exports: [
    UiTooltipDirective,
  ],
  entryComponents: [
    UiTooltipViewComponent,
  ],
})
export class UiTooltipModule {
}
