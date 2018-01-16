import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitRefDirective } from './kit-ref.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitRefDirective,
  ],
  exports: [
    KitRefDirective,
  ],
})
export class KitRefModule {
}
