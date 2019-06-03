import { NgModule } from '@angular/core';
import { EvoIntersectionObserverDirective } from './evo-intersection-observer.directive';

@NgModule({
  declarations: [
    EvoIntersectionObserverDirective,
  ],
  exports: [
    EvoIntersectionObserverDirective,
  ],
})
export class EvoIntersectionObserverModule {
}
