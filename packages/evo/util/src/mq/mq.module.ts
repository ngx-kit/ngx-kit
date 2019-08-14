import { NgModule } from '@angular/core';
import { MqDirective } from './mq.directive';

@NgModule({
  declarations: [
    MqDirective,
  ],
  exports: [
    MqDirective,
  ],
})
export class MqModule {
}
