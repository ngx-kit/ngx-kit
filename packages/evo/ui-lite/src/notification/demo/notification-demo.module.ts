import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LiteNotificationModule } from '../lite-notification.module';
import { NotificationDemoComponent } from './notification-demo.component';

@NgModule({
  imports: [
    CommonModule,
    LiteNotificationModule,
  ],
  declarations: [
    NotificationDemoComponent,
  ],
  entryComponents: [
    NotificationDemoComponent,
  ],
})
export class NotificationDemoModule {
}
