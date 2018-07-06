import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { HammerInstance } from '@angular/platform-browser/src/dom/events/hammer_gestures';
import { KitPlatformService } from '../kit-platform/kit-platform.service';

@Injectable({
  providedIn: 'root',
})
export class KitHammerProvider<T> {
  private _hammer: T | null = null;

  constructor(
    private platform: KitPlatformService,
  ) {
    if (this.platform.isBrowser()) {
      if (window && (window as any)['Hammer']) {
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
   * Build Hammer.JS instance.
   */
  build(el: HTMLElement, overrides: {[key: string]: Object} = {}): HammerInstance {
    const vBarHammerConfig = new HammerGestureConfig();
    vBarHammerConfig.overrides = overrides;
    return vBarHammerConfig.buildHammer(el);
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
