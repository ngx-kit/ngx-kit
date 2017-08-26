import { Component } from '@angular/core';
import { KitCoreOverlayContainerPositionCorner, KitNotificationService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'app-kit-notification-demo-config-side',
  templateUrl: './notification-demo-config-side.component.html',
})
export class NotificationDemoConfigSideComponent {
  constructor(private notificationService: KitNotificationService) {
  }

  open(position: KitCoreOverlayContainerPositionCorner) {
    this.notificationService.config({position});
    this.notificationService.open({message: 'Sided message'});
  }
}
