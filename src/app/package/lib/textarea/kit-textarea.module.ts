import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitTextareaComponent } from './kit-textarea/kit-textarea.component';

const exp = [
  KitTextareaComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
