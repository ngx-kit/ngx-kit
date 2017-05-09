import { KitStyle, KitStylesMap } from '@ngx-kit/core';

export interface KitTabsTheme {
  host: {
    base: KitStyle;
  };
  nav: {
    base: KitStyle;
  };
  navTab: {
    base: KitStyle;
    baseSwatchMap: KitStylesMap;
    active: KitStyle;
    activeSwatchMap: KitStylesMap;
  }
}
