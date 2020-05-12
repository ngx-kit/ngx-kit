import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitValueAccessorModule } from '../kit-value-accessor/kit-value-accessor.module';
import { KitInputDateDirective } from './kit-input-date.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitValueAccessorModule,
    KitInputDateDirective,
  ],
  declarations: [
    KitInputDateDirective,
  ],
})
export class KitInputDateModule {
}
