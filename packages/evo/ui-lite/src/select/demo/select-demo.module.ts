import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectDemoComponent } from './select-demo.component';
import { SelectModule } from '../select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SelectModule,
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
