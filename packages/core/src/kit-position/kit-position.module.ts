import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitPinPositionDirective } from './kit-pin-position/kit-pin-position.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitPinPositionDirective,
  ],
  exports: [
    KitPinPositionDirective,
  ],
})
export class KitPositionModule {
}
