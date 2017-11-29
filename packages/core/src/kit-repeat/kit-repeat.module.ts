import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitRepeatDirective } from './kit-repeat.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitRepeatDirective,
  ],
  exports: [
    KitRepeatDirective,
  ],
})
export class KitRepeatModule {
}
