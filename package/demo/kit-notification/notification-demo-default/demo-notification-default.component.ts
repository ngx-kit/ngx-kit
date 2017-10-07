import { Component } from '@angular/core';
import { KitNotificationService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'demo-notification-default',
  templateUrl: './demo-notification-default.component.html',
})
export class DemoNotificationDefaultComponent {
  constructor(private notificationService: KitNotificationService) {
  }

  open() {
    this.notificationService.open({title: 'hello', message: 'there'});
  }
}
