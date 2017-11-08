import { Component } from '@angular/core';
import { KitNotificationService } from '@ngx-kit/core';

@Component({
  selector: 'demo-notification-duration',
  templateUrl: './demo-notification-duration.component.html',
})
export class DemoNotificationDurationComponent {
  constructor(private notificationService: KitNotificationService) {
  }

  open(duration: number) {
    this.notificationService.config({duration});
    this.notificationService.open({message: 'Just an another message'});
  }
}
