import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoNotificationModule } from '../evo-notification.module';
import { EvoNotificationDemoComponent } from './evo-notification-demo.component';

@NgModule({
  imports: [
    CommonModule,
    EvoNotificationModule,
  ],
  declarations: [
    EvoNotificationDemoComponent,
  ],
  entryComponents: [
    EvoNotificationDemoComponent,
  ],
})
export class EvoNotificationDemoModule {
}
