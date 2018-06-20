import { Component } from '@angular/core';
import { UiNotificationHostConfig } from '../meta';
import { UiNotificationService } from '../ui-notification.service';

@Component({
  templateUrl: './ui-notification-demo.component.html',
})
export class UiNotificationDemoComponent {
  constructor(private notification: UiNotificationService) {
  }

  open(config: Partial<UiNotificationHostConfig>) {
    this.notification.config(config);
    this.notification.open({title: 'Hello', message: 'Notification message content'});
  }
}
