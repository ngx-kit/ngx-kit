import { Injectable } from '@angular/core';
import { uuid } from '@ngx-kit/evo/util';
import { BehaviorSubject, Observable } from 'rxjs';
import { UiNotificationHostConfig, UiNotificationItem, UiNotificationItemParams } from '../../ui-lite/src/notification/meta';

@Injectable({
  providedIn: 'root',
})
export class Notification {
  private _config = new BehaviorSubject<UiNotificationHostConfig>({
    position: 'top-right',
    duration: 4000,
  });

  private _items = new BehaviorSubject<UiNotificationItem[]>([]);

  get configChanges(): Observable<UiNotificationHostConfig> {
    return this._config.asObservable();
  }

  get itemsChanges(): Observable<UiNotificationItem[]> {
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
  config(config: Partial<UiNotificationHostConfig>) {
    this._config.next({...this._config.value, ...config} as UiNotificationHostConfig);
  }

  /**
   * Display notification message.
   */
  open(params: UiNotificationItemParams) {
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
