import { KitThemeColor } from '../core/meta/theme';

export interface KitDefaultThemeParams {
  border: {
    width: number;
    radius: {
      s: number;
      m: number;
      l: number;
    };
  };
  colorMod: {
    type: 'shade' | 'tint' | 'lighten' | 'darken';
    ratio: number;
  };
  colors: KitThemeColor[];
  grid: {
    v: number;
    h: number;
  };
  modules: {
    accordion: {
      color: string,
    };
    autoComplete: {
      resultsColor: string;
    };
    badge: {
      color: string;
    };
    buttons: {
      color: string,
      disabledColor: string,
    };
    checkbox: {
      color: string;
      checkedColor: string;
    };
    datePicker: {
      color: string;
    };
    dropdownMenu: {
      menuColor: string;
    };
    form: {
      errorColor: string;
    };
    input: {
      color: string;
      focusColor: string;
    };
    loadingBar: {
      color: string;
    };
    menu: {
      color: string;
      groupTitleFontSize: string;
    };
    radio: {
      color: string;
      checkedColor: string;
    };
    select: {
      color: string;
    };
    spinner: {
      color: string;
      duration: string;
      size: number;
      type: string;
    };
    tag: {
      color: string;
    };
    textarea: {
      color: string;
      focusColor: string;
    };
    toggle: {
      color: string;
      checkedColor: string;
    };
    typo: {
      fontSize: string;
      headingFontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
      };
      textColor: string;
      linkColor: string;
    };
  };
  shadows: {
    element: string;
    deep: string;
    overlay: string;
  };
  transitions: {
    default: string;
  };
}

export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]>; };
export type KitDefaultThemeCustomizer = DeepPartial<KitDefaultThemeParams>;
