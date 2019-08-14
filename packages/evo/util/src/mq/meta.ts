import { InjectionToken } from '@angular/core';

export const mqBreakpoints = new InjectionToken('evoMqPoints');

export interface MqParams {
  type?: 'all' | 'print' | 'screen' | 'speech';
  from?: string;
  until?: string;
  and?: string;
  server?: boolean;
}
