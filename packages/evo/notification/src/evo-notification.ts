import { Injectable } from '@angular/core';
import { evoUuid } from '@ngx-kit/evo/util';
import { BehaviorSubject, Observable } from 'rxjs';
import { EvoNotificationHostConfig, EvoNotificationItem } from './meta';

@Injectable({
  providedIn: 'root',
})
export class EvoNotification<P = {}> {
  private _config = new BehaviorSubject<EvoNotificationHostConfig>({
    duration: 4000,
  });

  private _items = new BehaviorSubject<EvoNotificationItem<P>[]>([]);

  get configChanges(): Observable<EvoNotificationHostConfig> {
    return this._config.asObservable();
  }

  get itemsChanges(): Observable<EvoNotificationItem<P>[]> {
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
  config(config: Partial<EvoNotificationHostConfig>) {
    this._config.next({...this._config.value, ...config} as EvoNotificationHostConfig);
  }

  /**
   * Display notification message.
   */
  open(params: P) {
    const __id = evoUuid();
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
