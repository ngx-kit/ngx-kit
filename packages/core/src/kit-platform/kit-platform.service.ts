import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

/**
 * Platform specific helpers.
 */
@Injectable({
  providedIn: 'root',
})
export class KitPlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  /**
   * Shortcut to `isPlatformBrowser` method.
   */
  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  /**
   * Shortcut to `isPlatformServer` method.
   */
  isServer() {
    return isPlatformServer(this.platformId);
  }

  /**
   * Calc native scroll width.
   */
  getScrollbarWidth(): number {
    if (this.isBrowser()) {
      if (typeof document === 'undefined') {
        return 0;
      }
      const body = document.body;
      const box = document.createElement('div');
      const boxStyle = box.style;
      let width;
      // Init test div
      boxStyle.position = 'absolute';
      boxStyle.position = boxStyle.position = '-9999px';
      boxStyle.height = boxStyle.width = '100px';
      boxStyle.overflow = 'scroll';
      body.appendChild(box);
      // Calc
      width = box.offsetWidth - box.clientWidth;
      // Cleanup
      body.removeChild(box);
      return width;
    } else {
      return 0;
    }
  }
}
