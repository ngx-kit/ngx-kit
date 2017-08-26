import { Component } from '@angular/core';
import { KitNotificationService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'app-kit-notification-demo-config-duration',
  templateUrl: './notification-demo-config-duration.component.html',
})
export class NotificationDemoConfigDurationComponent {
  constructor(private notificationService: KitNotificationService) {
  }

  open(duration: number) {
    this.notificationService.config({duration});
    this.notificationService.open({message: 'Just an another message'});
  }
}
