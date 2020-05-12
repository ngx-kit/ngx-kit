import { NgModule } from '@angular/core';
import { EvoIntersectionDirective } from './evo-intersection.directive';

@NgModule({
  declarations: [
    EvoIntersectionDirective,
  ],
  exports: [
    EvoIntersectionDirective,
  ],
})
export class EvoIntersectionModule {
}
