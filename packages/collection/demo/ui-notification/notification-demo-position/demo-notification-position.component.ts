import { Component } from '@angular/core';
import { KitNotificationPosition, KitNotificationService, } from '@ngx-kit/core';

@Component({
  selector: 'demo-notification-position',
  templateUrl: './demo-notification-position.component.html',
})
export class DemoNotificationPositionComponent {
  constructor(private notificationService: KitNotificationService) {
  }

  open(position: KitNotificationPosition) {
    this.notificationService.config({position});
    this.notificationService.open({message: 'Sided message'});
  }
}
