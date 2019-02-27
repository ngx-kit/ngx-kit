import { Inject, Injectable, Optional } from '@angular/core';
import { KitPlatformService } from '../kit-platform/kit-platform.service';
import { kitMomentInstance } from './meta';

/**
 * Provides [Moment.js](https://momentjs.com/) instance if available.
 *
 * Also you can manually inject Moment.js instance in the root module:
 *
 * ```typescript
 * import * as Moment from 'moment';
 * import { kitMomentInstance } from '@ngx-kit/core';
 * ...
 * @NgModule({
 *   ...
 *   providers: [
 *     {
 *       provide: kitMomentInstance,
 *       useValue: Moment,
 *     },
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class KitMomentProvider<T> {
  private _moment: T | null = null;

  constructor(
    private platform: KitPlatformService,
    @Optional() @Inject(kitMomentInstance) momentInstance: any,
  ) {
    if (momentInstance) {
      this._moment = momentInstance;
    } else if (this.platform.isBrowser()) {
      if (window && 'moment' in window) {
        this._moment = (window as any)['moment'];
      }
    }
  }

  /**
   * Get Moment.js instance.
   * Returns null if not available.
   */
  get moment(): T | null {
    return this._moment;
  }
}
