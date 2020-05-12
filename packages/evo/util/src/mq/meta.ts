import { InjectionToken } from '@angular/core';

export const evoMqBreakpoints = new InjectionToken('evoMqPoints');

export interface EvoMqParams {
  type?: 'all' | 'print' | 'screen' | 'speech';
  from?: string;
  until?: string;
  and?: string;
  server?: boolean;
}
