import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
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
 */
@Injectable()
export class KitNotificationService {
  private _config$ = new BehaviorSubject<KitNotificationHostConfig>({
    position: 'top-right',
    duration: 4000,
  });

  private _items$ = new BehaviorSubject<KitNotificationItem[]>([]);

  constructor() {
  }

  get config$(): Observable<KitNotificationHostConfig> {
    return this._config$.asObservable();
  }

  get items$(): Observable<KitNotificationItem[]> {
    return this._items$.asObservable();
  }

  close(__id: string) {
    const items = [...this._items$.value];
    const index = items.findIndex(i => i.__id === __id);
    if (index !== -1) {
      items.splice(index, 1);
      this._items$.next(items);
    }
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
   * @publicApi
   */
  open(params: any) {
    const __id = uuid();
    this._items$.next([...this._items$.value, {
      __id,
      params,
    }]);
    // auto-close
    setTimeout(() => {
      this.close(__id);
    }, this._config$.value.duration);
  }
}
