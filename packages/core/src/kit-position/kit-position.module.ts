import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSidePositionDirective } from './kit-side-position/kit-side-position.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitSidePositionDirective,
  ],
  exports: [
    KitSidePositionDirective,
  ],
})
export class KitPositionModule {
}
