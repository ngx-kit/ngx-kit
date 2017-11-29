import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiInputComponent } from './ui-input/ui-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UiInputComponent,
  ],
  exports: [
    UiInputComponent,
  ],
})
export class UiInputModule {
}
