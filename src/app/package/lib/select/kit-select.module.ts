import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StylerModule } from '@ngx-kit/styler';
import { KitSelectComponent } from './kit-select/kit-select.component';

const exp = [
  KitSelectComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StylerModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitSelectModule {
}
