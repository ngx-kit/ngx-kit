import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitCommonModule } from '@ngx-kit/ngx-kit';
import { StylerModule } from '@ngx-kit/styler';
import { KitNotificationHostComponent } from './kit-notification-host/kit-notification-host.component';

const exp = [
  KitNotificationHostComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCommonModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
})
export class KitNotificationModule {
}
