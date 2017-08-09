import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitSelectComponent } from './kit-select.component';

const exports = [
  KitSelectComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
export class KitSelectModule {
}
