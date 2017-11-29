import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitClassModule, KitCommonModule } from '@ngx-kit/core';
import { UiNotificationHostComponent } from './ui-notification-host/ui-notification-host.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
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
