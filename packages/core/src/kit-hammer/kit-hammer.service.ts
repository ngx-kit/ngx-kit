import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { HammerInstance } from '@angular/platform-browser/src/dom/events/hammer_gestures';

@Injectable({
  providedIn: 'root',
})
export class KitHammerService {
  build(el: HTMLElement, overrides: {[key: string]: Object} = {}): HammerInstance {
    const vBarHammerConfig = new HammerGestureConfig();
    vBarHammerConfig.overrides = overrides;
    return vBarHammerConfig.buildHammer(el);
  }

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
