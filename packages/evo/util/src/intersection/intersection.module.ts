import { NgModule } from '@angular/core';
import { IntersectionDirective } from './intersection.directive';

@NgModule({
  declarations: [
    IntersectionDirective,
  ],
  exports: [
    IntersectionDirective,
  ],
})
export class IntersectionModule {
}
