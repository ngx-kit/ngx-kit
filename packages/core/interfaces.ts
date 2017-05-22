import { types } from 'typestyle';

import { StylerService } from '@ngx-kit/styler';

export interface KitThemeService {
  style(component: string, styler: StylerService): void;
}

export type KitTypoHeaders = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type KitThemeComponents = {componentId: string, modifiers: any}[];

export interface KitSwatch {
  name: string;
  color: string;
  text?: string;
  darken?: string;
  lighten?: string;
}

export interface KitThemeProps {
  typo: {
    bodyFontSize: string;
    primaryFontSize: string;
    secondaryFontSize: string;
    headers: {
        [P in KitTypoHeaders]: string;
        }
  };
  colors: {
    swatches: KitSwatch[];
    types: {
      brand: string;
      page: string;
      border: string;
      link: string;
      primary: string;
      success: string;
      warning: string;
      error: string;
      disabled: string;
      [propName: string]: string;
    };
  };
}

export type KitStylesMap = {
  [index: string]: string;
}

export type KitStyle = types.NestedCSSProperties;