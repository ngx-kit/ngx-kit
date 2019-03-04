import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiCheckboxComponent } from './ui-checkbox/ui-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UiCheckboxComponent,
  ],
  exports: [
    UiCheckboxComponent,
  ],
})
export class UiCheckboxModule {
}
