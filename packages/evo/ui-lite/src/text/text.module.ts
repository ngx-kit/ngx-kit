import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './text/text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TextComponent,
  ],
  exports: [
    TextComponent,
  ],
})
export class TextModule {
}
