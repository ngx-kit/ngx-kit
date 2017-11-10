import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { KitNotificationService } from './kit-notification.service';

@NgModule({
  imports: [
    CommonModule,
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
