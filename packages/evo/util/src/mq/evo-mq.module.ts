import { NgModule } from '@angular/core';
import { EvoMqDirective } from './evo-mq.directive';

@NgModule({
  declarations: [
    EvoMqDirective,
  ],
  exports: [
    EvoMqDirective,
  ],
})
export class EvoMqModule {
}
