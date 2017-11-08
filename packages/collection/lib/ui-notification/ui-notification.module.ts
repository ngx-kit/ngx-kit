import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule } from '@ngx-kit/core';
import { UiNotificationHostComponent } from './ui-notification-host/ui-notification-host.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
  ],
  exports: [
    UiNotificationHostComponent,
  ],
  declarations: [
    UiNotificationHostComponent,
  ],
})
export class UiNotificationModule {
}
