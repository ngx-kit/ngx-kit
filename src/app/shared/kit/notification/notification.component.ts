import { Component, Input } from '@angular/core';
import { KitCoreOverlayContainerPositionCorner, KitNotificationService } from '@ngx-kit/ngx-kit';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-kit-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  @Input() content: Content;

  constructor(private notificationService: KitNotificationService) {
  }

  openDefault() {
    this.notificationService.open({message: 'Notification message'});
  }

  openTitled() {
    this.notificationService.open({message: 'Titled notification message', title: 'Message title'});
  }

  openWithColor(color: string) {
    this.notificationService.open({'message': 'Colored message', color});
  }

  openWithSpecificDuration(duration: number) {
    this.notificationService.open({message: `Message with specific duration=${duration}`, duration});
  }

  setDurationAndOpen(duration: number) {
    this.notificationService.config({duration});
    this.notificationService.open({message: 'Just an another message'});
  }

  setPositionAndOpen(position: KitCoreOverlayContainerPositionCorner) {
    this.notificationService.config({position});
    this.notificationService.open({message: 'Sided message'});
  }
}
