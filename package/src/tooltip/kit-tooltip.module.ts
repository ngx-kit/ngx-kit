import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitTooltipViewComponent } from './kit-tooltip-view.component';
import { KitTooltipDirective } from './kit-tooltip.directive';

const exports = [
  KitTooltipDirective,
];
const entries = [
  KitTooltipViewComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exports,
  ],
  declarations: [
    ...exports,
    ...entries,
  ],
  providers: [],
  entryComponents: entries,
})
export class KitTooltipModule {
}
