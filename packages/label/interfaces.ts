import { KitStyle, KitStylesMap } from '@ngx-kit/core';

export type KitLabelSize = 's' | 'm' | 'l';

export interface KitLabelTheme {
  host: {
    base: KitStyle;
    size: {
      [P in KitLabelSize]: KitStyle;
    };
    swatchMap: KitStylesMap;
  };
}
