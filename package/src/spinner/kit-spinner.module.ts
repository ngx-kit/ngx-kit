import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitSpinnerComponent } from './kit-spinner.component';

const exports = [
  KitSpinnerComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exports,
  ],
  declarations: [
    ...exports,
  ],
  providers: [],
})
export class KitSpinnerModule {
}
