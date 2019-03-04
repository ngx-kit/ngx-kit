import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiExtSelectDemoComponent } from './ui-ext-select-demo.component';
import { UiExtSelectModule } from '../ui-ext-select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiExtSelectModule,
  ],
  declarations: [
    UiExtSelectDemoComponent,
  ],
  entryComponents: [
    UiExtSelectDemoComponent,
  ],
})
export class UiExtSelectDemoModule {
}
