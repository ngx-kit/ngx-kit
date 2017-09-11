import { Injectable, Renderer2 } from '@angular/core';
import { KitInputMiddleware } from '../meta';

@Injectable()
export class KitLimitMiddleware implements KitInputMiddleware {
  enabled = false;

  limit: number;

  constructor(private renderer: Renderer2) {
  }

  transform(rawValue: any, el: HTMLInputElement): string {
    if (rawValue && rawValue.length > this.limit) {
      const value = rawValue.substr(0, this.limit);
      this.renderer.setProperty(el, 'value', value);
      return value;
    } else {
      return rawValue;
    }
  }
}
