import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LiteCheckboxModule } from '../lite-checkbox.module';
import { CheckboxDemoComponent } from './checkbox-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LiteCheckboxModule,
  ],
  declarations: [
    CheckboxDemoComponent,
  ],
  entryComponents: [
    CheckboxDemoComponent,
  ],
})
export class CheckboxDemoModule {
}
