import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LiteRadioModule } from '../lite-radio.module';
import { RadioDemoComponent } from './radio-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LiteRadioModule,
  ],
  declarations: [
    RadioDemoComponent,
  ],
  entryComponents: [
    RadioDemoComponent,
  ],
})
export class RadioDemoModule {
}
