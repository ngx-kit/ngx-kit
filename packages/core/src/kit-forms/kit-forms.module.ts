import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule } from '../kit-common/kit-common.module';
import { KitCheckDirective } from './kit-check/kit-check.directive';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
  ],
  exports: [
    KitCheckDirective,
  ],
  declarations: [
    KitCheckDirective,
  ],
})
export class KitFormsModule {
}
