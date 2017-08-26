import { Component } from '@angular/core';
import { KitNotificationService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'app-kit-notification-demo-with-title',
  templateUrl: './notification-demo-with-title.component.html',
})
export class NotificationDemoWithTitleComponent {
  constructor(private notificationService: KitNotificationService) {
  }

  open() {
    this.notificationService.open({message: 'Titled notification message', title: 'Message title'});
  }
}
