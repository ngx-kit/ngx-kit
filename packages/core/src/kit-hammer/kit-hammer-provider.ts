import { Injectable } from '@angular/core';
import { KitPlatformService } from '../kit-platform/kit-platform.service';

/**
 * Provides [Hammer.JS](https://hammerjs.github.io/) instance if available.
 */
@Injectable({
  providedIn: 'root',
})
export class KitHammerProvider<T> {
  private _hammer: T | null = null;

  constructor(
    private platform: KitPlatformService,
  ) {
    if (this.platform.isBrowser()) {
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
