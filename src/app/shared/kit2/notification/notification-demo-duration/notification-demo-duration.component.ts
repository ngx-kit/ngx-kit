import { Component } from '@angular/core';
import { KitNotificationService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'app-kit-notification-demo-duration',
  templateUrl: './notification-demo-duration.component.html',
})
export class NotificationDemoDurationComponent {
  constructor(private notificationService: KitNotificationService) {
  }

  open(duration: number) {
    this.notificationService.open({message: `Message with specific duration=${duration}`, duration});
  }
}
