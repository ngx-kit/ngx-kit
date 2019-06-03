import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoCheckboxComponent } from './evo-checkbox/evo-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EvoCheckboxComponent,
  ],
  exports: [
    EvoCheckboxComponent,
  ],
})
export class EvoCheckboxModule {
}
