import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from '../checkbox.module';
import { CheckboxDemoComponent } from './checkbox-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
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
