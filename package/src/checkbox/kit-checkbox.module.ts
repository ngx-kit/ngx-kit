import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitCheckboxComponent } from './kit-checkbox.component';

const exported = [
  KitCheckboxComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: [],
})
export class KitCheckboxModule {
}
