import { Component } from '@angular/core';
import { UiNotificationHostConfig } from '../meta';
import { Notification } from '../../../../notification/src/notification';

/**
 * @demo
 */
@Component({
  templateUrl: './notification-demo.component.html',
})
export class NotificationDemoComponent {
  constructor(private notification: Notification) {
  }

  open(config: Partial<UiNotificationHostConfig>, color: any = 'default') {
    this.notification.config(config);
    this.notification.open({title: 'Hello', message: 'Notification message content', color});
  }
}
