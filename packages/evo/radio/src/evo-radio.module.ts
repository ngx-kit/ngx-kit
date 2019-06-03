import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoRadioComponent } from './evo-radio/evo-radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EvoRadioComponent,
  ],
  exports: [
    EvoRadioComponent,
  ],
})
export class EvoRadioModule {
}
