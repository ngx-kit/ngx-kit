import { NgModule } from '@angular/core';
import { KitIntersectionDirective } from './kit-intersection/kit-intersection.directive';

@NgModule({
  declarations: [
    KitIntersectionDirective,
  ],
  exports: [
    KitIntersectionDirective,
  ],
})
export class KitIntersectionModule {
}
