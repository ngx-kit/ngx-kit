import { KitStyle, KitStylesMap } from '@ngx-kit/core';

export interface KitAccordionTheme {
  host: {
    base: KitStyle;
  };
  panelTitle: {
    base: KitStyle;
    swatchMap: KitStylesMap;
  };
  panel: {
    base: KitStyle;
  }
}
