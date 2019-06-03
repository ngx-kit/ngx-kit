import { NgModule } from '@angular/core';
import { EvoClassDirective } from './evo-class.directive';

@NgModule({
  declarations: [
    EvoClassDirective,
  ],
  exports: [
    EvoClassDirective,
  ],
})
export class EvoClassModule {
}
