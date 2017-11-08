import { InjectionToken } from '@angular/core';

export const kitInputMiddleware = new InjectionToken('kitInputMiddleware');

export interface KitInputMiddleware {
  enabled: boolean;
  transform(value: any, el: HTMLInputElement): any;
}
