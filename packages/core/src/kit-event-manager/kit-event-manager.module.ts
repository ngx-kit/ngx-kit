import { NgModule } from '@angular/core';
import { KitOutsideClickDirective } from './kit-outside-click/kit-outside-click.directive';

@NgModule({
  declarations: [
    KitOutsideClickDirective,
  ],
  exports: [
    KitOutsideClickDirective,
  ],
})
export class KitEventManagerModule {
}
