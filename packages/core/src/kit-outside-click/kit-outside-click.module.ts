import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOutsideClickDirective } from './kit-outside-click.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitOutsideClickDirective,
  ],
  exports: [
    KitOutsideClickDirective,
  ],
})
export class KitOutsideClickModule {
}
