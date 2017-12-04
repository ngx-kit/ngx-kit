import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCheckDirective } from './kit-check.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    KitCheckDirective,
  ],
  declarations: [
    KitCheckDirective,
  ],
})
export class KitCheckModule {
}
