import { Injectable } from '@angular/core';
import { KitPlatformService } from '../kit-platform/kit-platform.service';

/**
 * Service for global events handling.
 *
 * ### Example
 *
 * Handle `esc` keydown globally:
 *
 * ```typescript
 * import { keyEscape, KitEventManagerService } from '@ngx-kit/core';
 * ...
 * constructor(private em: KitEventManagerService) {
 * }
 * ...
 * // subscribe
 * const escUnsub = this.em.listenGlobal('keydown', (event: KeyboardEvent) => {
 *   if (event.keyCode === keyEscape) {
 *     // do the job
 *   }
 * }, true);
 * ...
 * // unsubscribe
 * escUnsub();
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class KitEventManagerService {
  constructor(private platform: KitPlatformService) {
  }

  /**
   * Listen event on the global root object.
   *
   * Reason: native Angular EventManager does not provide event listener with useCapture param.
   */
  listenGlobal(eventName: string, handler: Function, useCapture?: boolean): Function {
    if (this.platform.isBrowser()) {
      window.addEventListener(eventName, handler as any, useCapture);
      return () => window.removeEventListener(eventName, handler as any, useCapture);
    } else {
      return () => {
      };
    }
  }

  /**
   * Get array of objects visited by event.
   */
  getEventPath(event: Event): EventTarget[] {
    if (this.platform.isBrowser()) {
      const path = [];
      let node = event.target;
      while (node && node !== document.body) {
        path.push(node);
        node = node['parentNode'];
      }
      return path;
    } else {
      return [];
    }
  }
}
