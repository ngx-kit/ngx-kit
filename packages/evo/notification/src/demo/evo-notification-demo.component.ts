import { Component } from '@angular/core';
import { EvoNotificationHostConfig } from '../meta';
import { EvoNotification } from '../evo-notification';

/**
 * @demo
 */
@Component({
  templateUrl: './evo-notification-demo.component.html',
})
export class EvoNotificationDemoComponent {
  constructor(private notification: EvoNotification) {
  }

  open(config: Partial<EvoNotificationHostConfig>, color: any = 'default') {
    this.notification.config(config);
    this.notification.open({title: 'Hello', message: 'Notification message content', color});
  }
}
