import { ComponentRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { KitOverlayService } from '../core/overlay/kit-overlay.service';
import { KitNotificationHostComponent } from './kit-notification-host.component';
import { KitNotificationHostConfig, KitNotificationMessage } from './meta';

/**
 *
 *  ## Global config
 *
 *  ```typescript
 *  constructor(private notificationService: KitNotificationService) {
 *   this.notificationService.config({
 *     duration: 4000,
 *     position: 'top-right',
 *   });
 * }
 *  ```
 *
 *  ## Open notification
 *
 *  ```typescript
 *  constructor(private notificationService: KitNotificationService) {
 *   this.notificationService.open({message: 'Notification message'});
 * }
 *  ```
 */
@Injectable()
export class KitNotificationService {
  private _config$ = new BehaviorSubject<KitNotificationHostConfig>({
    position: 'top-right',
    duration: 4000,
  });

  private host: KitNotificationHostComponent;

  private hostRef: ComponentRef<KitNotificationHostComponent>;

  private hosted = false;

  constructor(private overlay: KitOverlayService) {
  }

  get config$(): Observable<KitNotificationHostConfig> {
    return this._config$.asObservable();
  }

  /**
   * Configure notification service.
   *
   * | Property | Type | Default | Description |
   * | --- | --- | --- | --- |
   * | *duration* | `number` | `4000` | How long to display a notification |
   * | *position* | `string` | `'top-right'` | Where to stack notifications |
   *
   * @publicApi
   */
  config(config: Partial<KitNotificationHostConfig>) {
    this._config$.next({...this._config$.value, ...config});
  }

  /**
   * Display notification message.
   *
   * | Property | Type | Default | Description |
   * | --- | --- | --- | --- |
   * | *message* | `string` | *required | |
   * | *title* | `string` | *optional | |
   * | *duration* | `number` | *optional | |
   * | *color* | `number` | *optional | |
   *
   * @publicApi
   */
  open(message: KitNotificationMessage) {
    this.mountHost();
    this.host.open(message);
  }

  private mountHost() {
    if (!this.hosted) {
      this.hostRef = this.overlay.host<KitNotificationHostComponent>(KitNotificationHostComponent);
      this.host = this.hostRef.instance;
      this.hosted = true;
    }
  }
}
