import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectDemoComponent } from './select-demo.component';
import { LiteSelectModule } from '../lite-select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LiteSelectModule,
  ],
  declarations: [
    SelectDemoComponent,
  ],
  entryComponents: [
    SelectDemoComponent,
  ],
})
export class SelectDemoModule {
}
