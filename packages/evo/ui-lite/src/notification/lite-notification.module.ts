import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvoClassModule } from '@ngx-kit/evo/util';
import { LiteNotificationHostComponent } from './notification-host/lite-notification-host.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    EvoClassModule,
  ],
  declarations: [
    LiteNotificationHostComponent,
  ],
  entryComponents: [
    LiteNotificationHostComponent,
  ],
  exports: [
    LiteNotificationHostComponent,
  ],
})
export class LiteNotificationModule {
}
