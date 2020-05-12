import { Component } from '@angular/core';
import { EvoNotificationHostConfig, EvoNotification } from '@ngx-kit/evo/notification';
import { LiteNotificationItemParams } from '../meta';

/**
 * @demo
 */
@Component({
  templateUrl: './notification-demo.component.html',
})
export class NotificationDemoComponent {
  constructor(private notification: EvoNotification) {
  }

  open(config: Partial<EvoNotificationHostConfig>, color: any = 'default') {
    this.notification.config(config);
    this.notification.open({title: 'Hello', message: 'Notification message content', color});
  }
}
