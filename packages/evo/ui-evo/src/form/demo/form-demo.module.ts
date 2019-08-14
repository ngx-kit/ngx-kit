import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../form.module';
import { FormDemoComponent } from './form-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
  ],
  declarations: [
    FormDemoComponent,
  ],
  entryComponents: [
    FormDemoComponent,
  ],
})
export class FormDemoModule {
}
