import { NgModule } from '@angular/core';
import { SkipBlurDirective } from './skip-blur.directive';

@NgModule({
  declarations: [
    SkipBlurDirective,
  ],
  exports: [
    SkipBlurDirective,
  ],
})
export class FocusListenerModule {
}
