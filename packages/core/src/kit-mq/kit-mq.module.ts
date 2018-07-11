import { NgModule } from '@angular/core';
import { KitMqDirective } from './kit-mq/kit-mq.directive';

@NgModule({
  declarations: [
    KitMqDirective,
  ],
  exports: [
    KitMqDirective,
  ],
})
export class KitMqModule {
}
