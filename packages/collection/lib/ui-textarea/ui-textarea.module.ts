import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiTextareaComponent } from './ui-textarea/ui-textarea.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UiTextareaComponent,
  ],
  exports: [
    UiTextareaComponent,
  ],
})
export class UiTextareaModule {
}
