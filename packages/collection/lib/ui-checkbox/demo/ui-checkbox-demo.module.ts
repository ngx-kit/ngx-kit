import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiCheckboxModule } from '../ui-checkbox.module';
import { UiCheckboxDemoComponent } from './ui-checkbox-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiCheckboxModule,
  ],
  declarations: [
    UiCheckboxDemoComponent,
  ],
})
export class UiCheckboxDemoModule {
}
