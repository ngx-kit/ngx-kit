import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiAlertModule } from '../ui-alert.module';
import { UiAlertDemoComponent } from './ui-alert-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiAlertModule,
  ],
  declarations: [
    UiAlertDemoComponent,
  ],
  entryComponents: [
    UiAlertDemoComponent,
  ],
})
export class UiAlertDemoModule {
}
