import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationModule } from '../notification.module';
import { NotificationDemoComponent } from './notification-demo.component';

@NgModule({
  imports: [
    CommonModule,
    NotificationModule,
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
