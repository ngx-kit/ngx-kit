import { Component } from '@angular/core';
import { KitNotificationService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'app-kit-notification-demo-color',
  templateUrl: './notification-demo-color.component.html',
})
export class NotificationDemoColorComponent {
  constructor(private notificationService: KitNotificationService) {
  }

  open(color: string) {
    this.notificationService.open({'message': 'Colored message', color});
  }
}
