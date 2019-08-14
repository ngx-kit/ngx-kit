import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    RadioComponent,
  ],
  exports: [
    RadioComponent,
  ],
})
export class RadioModule {
}
