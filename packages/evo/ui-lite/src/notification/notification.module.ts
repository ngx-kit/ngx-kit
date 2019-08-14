import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClassModule } from '@ngx-kit/evo/util';
import { NotificationHostComponent } from './notification-host/notification-host.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    ClassModule,
  ],
  declarations: [
    NotificationHostComponent,
  ],
  entryComponents: [
    NotificationHostComponent,
  ],
  exports: [
    NotificationHostComponent,
  ],
})
export class NotificationModule {
}
