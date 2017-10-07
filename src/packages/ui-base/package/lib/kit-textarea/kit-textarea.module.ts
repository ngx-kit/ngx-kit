import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitTextareaComponent } from './kit-textarea/kit-textarea.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    KitTextareaComponent,
  ],
  declarations: [
    KitTextareaComponent,
  ],
})
export class KitTextareaModule {
}
