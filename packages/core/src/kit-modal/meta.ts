import { InjectionToken } from '@angular/core';

export interface KitModalOptions {
  backdropClose: boolean;
  escClose: boolean;
  stack: boolean;
  scrollLock: boolean;
}

export const kitModalDefaultOptions = new InjectionToken('kitModalDefaultOptions');

export interface KitModalCanClose {
  canClose(): boolean;
}
