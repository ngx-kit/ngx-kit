import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioModule } from '../radio.module';
import { RadioDemoComponent } from './radio-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RadioModule,
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
