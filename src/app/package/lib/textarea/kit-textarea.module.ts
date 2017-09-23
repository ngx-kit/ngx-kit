import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StylerModule } from '@ngx-kit/styler';
import { KitTextareaComponent } from './kit-textarea/kit-textarea.component';

const exp = [
  KitTextareaComponent,
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
export class KitTextareaModule {
}
