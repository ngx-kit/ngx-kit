import { KitStyle } from '@ngx-kit/core';

export interface KitBreadcrumbItem {
  title: string;
  link: any[];
}

export interface KitBreadcrumbTheme {
  host: {
    base: KitStyle;
  };
}
