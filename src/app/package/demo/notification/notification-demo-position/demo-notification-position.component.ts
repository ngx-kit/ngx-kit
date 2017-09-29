import { Component } from '@angular/core';
import { KitCoreOverlayContainerPositionCorner, KitNotificationService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'demo-notification-position',
  templateUrl: './demo-notification-position.component.html',
})
export class DemoNotificationPositionComponent {
  constructor(private notificationService: KitNotificationService) {
  }

  open(position: KitCoreOverlayContainerPositionCorner) {
    this.notificationService.config({position});
    this.notificationService.open({message: 'Sided message'});
  }
}
