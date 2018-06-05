import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiAlertDemoComponent } from './ui-alert-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiAlertDemoModule,
  ],
  declarations: [
    UiAlertDemoComponent,
  ],
})
export class UiAlertDemoModule {
}
