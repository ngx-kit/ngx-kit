import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule } from '@ngx-kit/ngx-kit';
import { KitNotificationHostComponent } from './kit-notification-host/kit-notification-host.component';

@NgModule({
  imports: [
    CommonModule,
    KitCommonModule,
  ],
  exports: [
    KitNotificationHostComponent,
  ],
  declarations: [
    KitNotificationHostComponent,
  ],
})
export class KitNotificationModule {
}
