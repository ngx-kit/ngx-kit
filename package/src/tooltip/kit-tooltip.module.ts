import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitTooltipViewComponent } from './kit-tooltip-view.component';
import { KitTooltipDirective } from './kit-tooltip.directive';

const exported = [
  KitTooltipDirective,
];
const entry = [
  KitTooltipViewComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
    ...entry,
  ],
  providers: [],
  entryComponents: entry,
})
export class KitTooltipModule {
}
