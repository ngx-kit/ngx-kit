import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoRadioModule } from '../evo-radio.module';
import { UiRadioDemoComponent } from './ui-radio-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvoRadioModule,
  ],
  declarations: [
    UiRadioDemoComponent,
  ],
  entryComponents: [
    UiRadioDemoComponent,
  ],
})
export class UiRadioDemoModule {
}
