import { NgModule } from '@angular/core';
import { KitSkipBlurDirective } from './kit-skip-blur.directive';

@NgModule({
  declarations: [
    KitSkipBlurDirective,
  ],
  exports: [
    KitSkipBlurDirective,
  ],
})
export class KitFocusListenerModule {
}
