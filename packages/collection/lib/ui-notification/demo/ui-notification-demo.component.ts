import { Component } from '@angular/core';
import { KitNotificationService } from '../../../../core';
import { KitNotificationHostConfig } from '../../../../core/src/kit-notification/meta';

@Component({
  templateUrl: './ui-notification-demo.component.html',
})
export class UiNotificationDemoComponent {
  constructor(private notificationService: KitNotificationService) {
  }

  open(config: Partial<KitNotificationHostConfig>) {
    this.notificationService.config(config);
    this.notificationService.open({title: 'Hello', message: 'Notification message content'});
  }
}
