import { KitStyle } from '@ngx-kit/core';

export interface KitIconTheme {
  host: {
    base: KitStyle;
  };
}

export interface KitIcon {
  name: string;
  url: string;
}

export interface KitIconCached {
  name: string;
  svg: SVGElement;
}