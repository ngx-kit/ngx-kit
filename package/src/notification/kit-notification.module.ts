import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitNotificationService } from './kit-notification.service';

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
  ],
})
export class KitNotificationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KitNotificationModule,
      providers: [KitNotificationService],
    };
  }
}
