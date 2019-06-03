import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvoFormModule } from '../evo-form.module';
import { UiFormDemoComponent } from './ui-form-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EvoFormModule,
  ],
  declarations: [
    UiFormDemoComponent,
  ],
  entryComponents: [
    UiFormDemoComponent,
  ],
})
export class UiFormDemoModule {
}
