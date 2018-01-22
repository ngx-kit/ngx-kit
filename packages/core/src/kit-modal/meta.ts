import { InjectionToken } from '@angular/core';

export interface KitModalParams {
  backdropClose: boolean;
  escClose: boolean;
  stack: boolean;
  // @todo
  scrollLock: boolean;
}

export const kitModalDefaultParams = new InjectionToken('kitModalDefaultParams');
