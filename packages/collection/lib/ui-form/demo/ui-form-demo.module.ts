import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiFormModule } from '../ui-form.module';
import { UiFormDemoComponent } from './ui-form-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiFormModule,
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
