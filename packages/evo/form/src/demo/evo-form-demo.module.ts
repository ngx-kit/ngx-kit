import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvoFormModule } from '../evo-form.module';
import { EvoFormDemoComponent } from './evo-form-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EvoFormModule,
  ],
  declarations: [
    EvoFormDemoComponent,
  ],
  entryComponents: [
    EvoFormDemoComponent,
  ],
})
export class EvoFormDemoModule {
}
