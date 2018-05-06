import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitClassModule, KitNotificationHost } from '@ngx-kit/core';
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
  entryComponents: [
    UiNotificationHostComponent,
  ],
  providers: [
    {
      provide: KitNotificationHost,
      useValue: UiNotificationHostComponent,
    },
  ],
})
export class UiNotificationModule {
  constructor() {
    console.log('UiNotificationModule constr');
  }
}
