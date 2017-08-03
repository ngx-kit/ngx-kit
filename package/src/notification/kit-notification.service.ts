import { ComponentRef, Injectable } from '@angular/core';
import { KitOverlayService } from '../core/overlay/kit-overlay.service';
import { KitNotificationHostComponent } from './kit-notification-host.component';

@Injectable()
export class KitNotificationService {
  private host: KitNotificationHostComponent;

  private hostRef: ComponentRef<KitNotificationHostComponent>;

  private hosted = false;

  constructor(private overlay: KitOverlayService) {
  }

  open(message: string, title?: string) {
    this.mountHost();
    this.host.open(message, title);
  }

  private mountHost() {
    if (!this.hosted) {
      this.hostRef = this.overlay.host<KitNotificationHostComponent>(KitNotificationHostComponent);
      this.host = this.hostRef.instance;
      this.hosted = true;
    }
  }
}
