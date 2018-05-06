import { Inject, Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { KitOverlayComponentRef } from '../kit-overlay/kit-overlay-component-ref';
import { KitOverlayService } from '../kit-overlay/kit-overlay.service';
import { uuid } from '../util/uuid';
import { KitNotificationHost, KitNotificationHostConfig, KitNotificationItem } from './meta';

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
 *   this.notificationService.open(NotifViewComponent, {first: 1, second: 2});
 * }
 *  ```
 */
@Injectable({
  providedIn: 'root',
})
export class KitNotificationService {
  private _config = new BehaviorSubject<KitNotificationHostConfig>({
    position: 'top-right',
    duration: 4000,
  });

  private _items = new BehaviorSubject<KitNotificationItem[]>([]);

  private hostRef: KitOverlayComponentRef<any>;

  constructor(
    @Inject(KitNotificationHost) private host: Type<any>,
    private overlay: KitOverlayService,
  ) {
    if (this.host) {
      this.hostRef = this.overlay.hostComponent({
        component: this.host,
        providers: [
          {
            provide: KitNotificationService,
            useValue: this,
          },
        ],
      });
    } else {
      throw new Error(`Please provide component for token "KitNotificationHost".`);
    }
  }

  get configChanges(): Observable<KitNotificationHostConfig> {
    return this._config.asObservable();
  }

  get itemsChanges(): Observable<KitNotificationItem[]> {
    return this._items.asObservable();
  }

  close(__id: string) {
    const items = [...this._items.value];
    const index = items.findIndex(i => i.__id === __id);
    if (index !== -1) {
      items.splice(index, 1);
      this._items.next(items);
    }
  }

  /**
   * Configure notification service.
   */
  config(config: Partial<KitNotificationHostConfig>) {
    this._config.next({...this._config.value, ...config} as KitNotificationHostConfig);
  }

  /**
   * Display notification message.
   */
  open(params: any) {
    const __id = uuid();
    this._items.next([...this._items.value, {
      __id,
      params,
    }]);
    // auto-close
    setTimeout(() => {
      this.close(__id);
    }, this._config.value.duration);
  }
}
