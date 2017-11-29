import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitAnchorDirective } from './kit-anchor.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitAnchorDirective,
  ],
  exports: [
    KitAnchorDirective,
  ],
})
export class KitAnchorModule {
}
