import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';

import { KitCommonModule } from '../kit-common/kit-common.module';
import { KitCheckDirective } from './kit-check/kit-check.directive';
import { KitFormControlDirective } from './kit-form-control/kit-form-control.directive';
import { KitFormErrorDirective } from './kit-form-error/kit-form-error.directive';
import { KitInputValueAccessorDirective } from './kit-input-value-accessor/kit-input-value-accessor.directive';

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCommonModule,
  ],
  exports: [
    KitInputValueAccessorDirective,
    KitCheckDirective,
    KitFormControlDirective,
    KitFormErrorDirective,
  ],
  declarations: [
    KitInputValueAccessorDirective,
    KitCheckDirective,
    KitFormControlDirective,
    KitFormErrorDirective,
  ],
})
export class KitFormsModule {
}
