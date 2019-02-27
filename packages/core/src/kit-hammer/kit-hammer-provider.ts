import { Inject, Injectable, Optional } from '@angular/core';
import { KitPlatformService } from '../kit-platform/kit-platform.service';
import { kitHammerInstance } from './meta';

/**
 * Provides [Hammer.JS](https://hammerjs.github.io/) instance if available.
 *
 * Also you can manually inject HammerJS instance in the root module:
 *
 * ```typescript
 * import * as Hammer from 'hammerjs';
 * import { kitHammerInstance } from '@ngx-kit/core';
 * ...
 * @NgModule({
 *   ...
 *   providers: [
 *     {
 *       provide: kitHammerInstance,
 *       useValue: Hammer,
 *     },
 * ```
 *
 * But be aware, Hammer.JS does not support server-side rendering.
 *
 * That's why it is better just to add it via `angular.json` scripts section:
 *
 * ```json
 * ...
 * "scripts": [
 *   "node_modules/hammerjs/hammer.js",
 * ],
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class KitHammerProvider<T> {
  private _hammer: T | null = null;

  constructor(
    private platform: KitPlatformService,
    @Optional() @Inject(kitHammerInstance) hammerInstance: T,
  ) {
    if (hammerInstance) {
      this._hammer = hammerInstance;
    } else if (this.platform.isBrowser()) {
      if (window && 'Hammer' in window) {
        this._hammer = (window as any)['Hammer'];
      }
    }
  }

  /**
   * Get Hammer.JS.
   * Returns null if not available.
   */
  get hammer() {
    return this._hammer;
  }

  /**
   * Get event position relative to passed element, not the viewport.
   */
  calcRelatedPosition(
    el: HTMLElement,
    center: {x: number, y: number},
  ): {x: number, y: number} {
    const rect: ClientRect = el.getBoundingClientRect();
    return {
      x: center.x - rect.left,
      y: center.y - rect.top,
    };
  }
}
