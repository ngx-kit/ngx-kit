import { InjectionToken } from '@angular/core';

export const kitMqBreakpoints = new InjectionToken('kitMqPoints');

export interface KitMqParams {
  type?: 'all' | 'print' | 'screen' | 'speech';
  from?: string;
  until?: string;
  and?: string;
}
