import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitGridControlDirective } from './kit-grid-control/kit-grid-control.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitGridControlDirective,
  ],
  exports: [
    KitGridControlDirective,
  ],
})
export class KitGridModule {
}
