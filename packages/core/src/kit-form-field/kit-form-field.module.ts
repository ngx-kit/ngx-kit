import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitFormErrorDirective } from './kit-form-error/kit-form-error.directive';
import { KitNgControlDirective } from './kit-ng-control/kit-ng-control.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    KitFormErrorDirective,
    KitNgControlDirective,
  ],
  exports: [
    KitFormErrorDirective,
    KitNgControlDirective,
  ],
  providers: [],
})
export class KitFormFieldModule {
}
