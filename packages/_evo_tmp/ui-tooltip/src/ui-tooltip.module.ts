import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitClassModule, KitOverlayModule, KitPositionModule } from '@ngx-kit/core';
import { UiTooltipViewComponent } from './ui-tooltip-view/ui-tooltip-view.component';
import { UiTooltipDirective } from './ui-tooltip/ui-tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
    KitPositionModule,
    KitClassModule,
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
