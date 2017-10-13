import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiSelectComponent } from './ui-select/ui-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    UiSelectComponent,
  ],
  declarations: [
    UiSelectComponent,
  ],
  providers: [],
})
export class UiSelectModule {
}
