import { NgModule } from '@angular/core';
import { KitClassDirective } from './kit-class.directive';

@NgModule({
  declarations: [
    KitClassDirective,
  ],
  exports: [
    KitClassDirective,
  ],
})
export class KitClassModule {
}
