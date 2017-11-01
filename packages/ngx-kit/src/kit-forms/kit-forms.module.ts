import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCommonModule } from '../kit-common/kit-common.module';
import { KitInputValueAccessorDirective } from './kit-input-value-accessor/kit-input-value-accessor.directive';
import { KitCheckDirective } from './kit-check/kit-check.directive';

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCommonModule,
  ],
  exports: [
    KitInputValueAccessorDirective,
    KitCheckDirective,
  ],
  declarations: [
    KitInputValueAccessorDirective,
    KitCheckDirective,
  ],
})
export class KitFormsModule {
}
