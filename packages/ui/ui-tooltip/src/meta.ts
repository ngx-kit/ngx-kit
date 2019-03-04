import { KitPinPosition } from '@ngx-kit/core';

export type UiTooltipColors = 'default' | 'primary';

export interface UiTooltipOptions {
  color?: UiTooltipColors;
  position?: KitPinPosition;
}
