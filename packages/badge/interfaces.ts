import { KitStyle, KitStylesMap, KitSwatch } from '@ngx-kit/core';

export type KitBadgeSize = 's' | 'm' | 'l';

export interface KitBadgeTheme {
  host: {
    base: KitStyle;
    size: {
      [P in KitBadgeSize]: KitStyle;
    };
    swatchMap: KitStylesMap;
  };
}
