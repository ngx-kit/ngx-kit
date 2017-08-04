import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitCoreOverlayContainerPositionCorner, KitNotificationService } from '@ngx-kit/ngx-kit';
import { Content } from '../../../interfaces/content';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit {
  content: Content;

  constructor(private route: ActivatedRoute,
              private notificationService: KitNotificationService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.content = data.content;
    });
  }

  openDefault() {
    this.notificationService.open('Notification message');
  }

  openTitled() {
    this.notificationService.open('Titled notification message', 'Message title');
  }

  sitPositionAndOpen(position: KitCoreOverlayContainerPositionCorner) {
    this.notificationService.config.position = position;
    this.notificationService.open('Sided message');
  }
}
