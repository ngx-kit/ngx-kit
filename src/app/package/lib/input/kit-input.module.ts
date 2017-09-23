import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StylerModule } from '@ngx-kit/styler';
import { KitInputComponent } from './kit-input/kit-input.component';

const exp = [
  KitInputComponent,
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
export class KitInputModule {
}
