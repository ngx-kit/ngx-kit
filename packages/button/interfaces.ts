import { KitStyle, KitStylesMap } from '@ngx-kit/core';

export type KitButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type KitButtonType = 'primary' | 'success' | 'info' | 'warning' | 'error' | 'link';

export interface KitButtonTheme {
  host: {
    base: KitStyle;
    size: {
      [P in KitButtonSize]: KitStyle;
    };
    swatchMap: KitStylesMap;
    type: {
      [P in KitButtonType]: KitStyle;
    };
    disabled: KitStyle;
  };
}
