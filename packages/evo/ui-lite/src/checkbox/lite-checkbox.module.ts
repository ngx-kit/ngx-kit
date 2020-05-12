import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LiteCheckboxComponent } from './checkbox/lite-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    LiteCheckboxComponent,
  ],
  exports: [
    LiteCheckboxComponent,
  ],
})
export class LiteCheckboxModule {
}
