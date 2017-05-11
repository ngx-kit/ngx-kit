import { KitStyle } from '@ngx-kit/core';

export type KitTooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface KitTooltipTheme {
  host: {
    base: KitStyle;
  };
}
