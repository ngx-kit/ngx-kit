import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LiteRadioComponent } from './radio/lite-radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    LiteRadioComponent,
  ],
  exports: [
    LiteRadioComponent,
  ],
})
export class LiteRadioModule {
}
