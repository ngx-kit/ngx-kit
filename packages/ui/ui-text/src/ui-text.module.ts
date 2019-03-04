import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiTextComponent } from './ui-text/ui-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UiTextComponent,
  ],
  exports: [
    UiTextComponent,
  ],
})
export class UiTextModule {
}
