import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitClassModule } from '@ngx-kit/core';
import 'hammerjs';
import { UiNotificationHostComponent } from './ui-notification-host/ui-notification-host.component';

@NgModule({
  imports: [
    CommonModule,
    KitClassModule,
  ],
  declarations: [
    UiNotificationHostComponent,
  ],
  exports: [
    UiNotificationHostComponent,
  ],
})
export class UiNotificationModule {
}
