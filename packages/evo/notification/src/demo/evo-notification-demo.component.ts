import { Component } from '@angular/core';
import { EvoNotificationHostConfig } from '../meta';
import { EvoNotificationService } from '../evo-notification.service';

/**
 * @demo
 */
@Component({
  templateUrl: './evo-notification-demo.component.html',
})
export class EvoNotificationDemoComponent {
  constructor(private notification: EvoNotificationService) {
  }

  open(config: Partial<EvoNotificationHostConfig>, color: any = 'default') {
    this.notification.config(config);
    this.notification.open({title: 'Hello', message: 'Notification message content', color});
  }
}
