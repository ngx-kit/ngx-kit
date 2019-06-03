import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiSelectDemoComponent } from './ui-select-demo.component';
import { UiSelectModule } from '../ui-select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiSelectModule,
  ],
  declarations: [
    UiSelectDemoComponent,
  ],
  entryComponents: [
    UiSelectDemoComponent,
  ],
})
export class UiSelectDemoModule {
}
