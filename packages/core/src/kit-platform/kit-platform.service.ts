import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
const hasV8BreakIterator = (typeof Intl !== 'undefined' && (Intl as any).v8BreakIterator);

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

  isBrowserEdge() {
    return this.isBrowser() && /(edge)/i.test(navigator.userAgent);
  }

  isBrowserTrident() {
    return this.isBrowser() && /(msie|trident)/i.test(navigator.userAgent);
  }

  isBrowserBlink() {
    return this.isBrowser() && (!!((window as any).chrome || hasV8BreakIterator) &&
      typeof CSS !== 'undefined' && !this.isBrowserEdge() && !this.isBrowserTrident());
  }

  isBrowserWebkit() {
    return this.isBrowser() &&
      /AppleWebKit/i.test(navigator.userAgent) && !this.isBrowserBlink()
      && !this.isBrowserEdge() && !this.isBrowserTrident();
  }

  isBrowserIos() {
    return this.isBrowser() && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !(window as any).MSStream;
  }

  isBrowserFirefox() {
    return this.isBrowser() && /(firefox|minefield)/i.test(navigator.userAgent);
  }

  isBrowserAndroid() {
    return this.isBrowser() && /android/i.test(navigator.userAgent) && !this.isBrowserTrident();
  }

  isBrowserSafari() {
    return this.isBrowser() && /safari/i.test(navigator.userAgent) && this.isBrowserWebkit();
  }
}
