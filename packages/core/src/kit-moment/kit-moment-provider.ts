import { Injectable } from '@angular/core';
import { KitPlatformService } from '../kit-platform/kit-platform.service';

@Injectable({
  providedIn: 'root',
})
export class KitMomentProvider<T> {
  private _moment: T | null = null;

  constructor(
    private platform: KitPlatformService,
  ) {
    if (this.platform.isBrowser()) {
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
