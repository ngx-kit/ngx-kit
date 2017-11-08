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
  exports: [
    UiTooltipDirective,
  ],
  declarations: [
    UiTooltipDirective,
    UiTooltipViewComponent,
  ],
  entryComponents: [
    UiTooltipViewComponent,
  ],
})
export class UiTooltipModule {
}
