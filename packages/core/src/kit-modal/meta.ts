import { InjectionToken } from '@angular/core';

export interface KitModalParams {
  backdropClose: boolean;
  escClose: boolean;
  stack: boolean;
  autoFocus: boolean;
  focusTrap: boolean;
  scrollLock: boolean;
}

export const kitModalDefaultParams = new InjectionToken('kitModalDefaultParams');
