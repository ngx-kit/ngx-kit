import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EvoCheckboxModule } from '../evo-checkbox.module';
import { UiCheckboxDemoComponent } from './ui-checkbox-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EvoCheckboxModule,
  ],
  declarations: [
    UiCheckboxDemoComponent,
  ],
  entryComponents: [
    UiCheckboxDemoComponent,
  ],
})
export class UiCheckboxDemoModule {
}
