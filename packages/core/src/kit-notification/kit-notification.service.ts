import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { uuid } from '../util/uuid';
import { KitNotificationHostConfig, KitNotificationItem } from './meta';

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
 *
 *  @deprecated Service is redundant, moved to the collection.
 *
 *  @todo remove in next major version.
 *
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
