import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LiteTextComponent } from './text/lite-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    LiteTextComponent,
  ],
  exports: [
    LiteTextComponent,
  ],
})
export class LiteTextModule {
}
