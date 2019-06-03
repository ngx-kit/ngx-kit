import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoTextComponent } from './evo-text/evo-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EvoTextComponent,
  ],
  exports: [
    EvoTextComponent,
  ],
})
export class EvoTextModule {
}
