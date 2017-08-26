import { Component } from '@angular/core';
import { KitNotificationService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'app-kit-notification-demo-default',
  templateUrl: './notification-demo-default.component.html',
})
export class NotificationDemoDefaultComponent {
  constructor(private notificationService: KitNotificationService) {
  }

  open() {
    this.notificationService.open({message: 'Notification message'});
  }
}
