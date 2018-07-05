import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiSelectModule } from '../ui-select.module';
import { UiSelectDemoComponent } from './ui-select-demo.component';

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
