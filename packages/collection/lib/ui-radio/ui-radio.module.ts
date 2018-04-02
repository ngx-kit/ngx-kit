import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiRadioComponent } from './ui-radio/ui-radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UiRadioComponent,
  ],
  exports: [
    UiRadioComponent,
  ],
})
export class UiRadioModule {
}
