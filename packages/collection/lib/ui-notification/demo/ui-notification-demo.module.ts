import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiNotificationModule } from '../ui-notification.module';
import { UiNotificationDemoComponent } from './ui-notification-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiNotificationModule,
  ],
  declarations: [
    UiNotificationDemoComponent,
  ],
  entryComponents: [
    UiNotificationDemoComponent,
  ],
})
export class UiNotificationDemoModule {
}
