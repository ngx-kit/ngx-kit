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
  }
  colors: KitThemeColor[];
  grid: {
    v: number;
    h: number;
  };
  modules: {
    autoComplete: {
      resultsColor: string;
    },
    badge: {
      defaultColor: string;
    }
    buttons: {
      defaultColor: string,
      disabledColor: string,
    },
    checkbox: {
      color: string;
      checkedColor: string;
    },
    datePicker: {
      color: string;
    },
    dropdownMenu: {
      menuColor: string;
    },
    form: {
      errorColor: string;
    },
    input: {
      color: string;
      focusColor: string;
    },
    loadingBar: {
      color: string;
    },
    menu: {
      color: string;
      groupTitleFontSize: string;
    },
    radio: {
      color: string;
      checkedColor: string;
    },
    select: {
      color: string;
    },
    tag: {
      defaultColor: string;
    }
    textarea: {
      color: string;
      focusColor: string;
    },
    toggle: {
      color: string;
      checkedColor: string;
    },
  },
  raws: {
    bodyColor: string;
    bodyFontSize: string;
    headersSizes: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    linkColor: string;
  }
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

export interface KitDefaultThemeColor {
  color: string;
  text: string;
}
