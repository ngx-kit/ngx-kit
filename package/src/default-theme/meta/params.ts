export interface ColorsSet {
  background: string;
  border: string;
  text: string;
}

export interface TypoColorsSet {
  background: string;
  text: string;
}

export interface Swatch {
  active: string;
  base: string;
  baseText: string;
  disabledText: string;
  hover: string;
  light: string;
  lightText: string;
  overlay: string;
  overlayText: string;
}

export type DefaultColors = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';

export interface KitDefaultThemeParams {
  borders: KitDefaultThemeParamsBorders;
  colors: KitDefaultThemeParamsColors;
  grid: KitDefaultThemeParamsGrid;
  moduleAlert: KitDefaultThemeParamsAlert;
  moduleColorPicker: KitDefaultThemeParamsColorPicker;
  moduleDatePicker: KitDefaultThemeParamsDatePicker;
  moduleMenu: KitDefaultThemeParamsMenu;
  moduleSpinner: KitDefaultThemeParamsSpinner;
  moduleTypo: KitDefaultThemeParamsTypo;
  shadows: KitDefaultThemeParamsShadows;
  transitions: KitDefaultThemeParamsTransitions;
}

export interface KitDefaultThemeParamsColors {
  inputs: {
    base: ColorsSet;
    hover: ColorsSet;
    focus: ColorsSet;
    readonly: ColorsSet;
    disabled: ColorsSet;
    checked: ColorsSet;
    options: {
      base: ColorsSet;
      hover: ColorsSet;
      selected: ColorsSet;
      disabled: ColorsSet;
    }
  };
  loaders: {
    base: string;
    shadow: string;
  };
  menus: {
    menu: ColorsSet,
    item: {
      base: ColorsSet;
      hover: ColorsSet;
      active: ColorsSet;
      disabled: ColorsSet;
    };
    groupTitle: TypoColorsSet;
    separator: string;
    sub: {
      background: string;
      border: string;
    };
    subItem: {
      base: ColorsSet;
      hover: ColorsSet;
      active: ColorsSet;
      disabled: ColorsSet;
    };
  },
  modals: {
    modal: ColorsSet;
  }
  panels: {
    border: string;
    content: TypoColorsSet;
    title: {
      base: TypoColorsSet,
      hover: TypoColorsSet,
      active: TypoColorsSet,
    };
  };
  swatches: {[key in DefaultColors]: Swatch};
  typo: {
    text: TypoColorsSet;
    link: {
      base: TypoColorsSet;
      hover: TypoColorsSet;
      focus: TypoColorsSet;
      visited: TypoColorsSet;
    };
  }
}

export interface KitDefaultThemeParamsBorders {
  radius: number;
  width: number;
}

export interface KitDefaultThemeParamsGrid {
  h: number;
  v: number;
}

export interface KitDefaultThemeParamsAlert {
  titleFontSize: string;
}

export interface KitDefaultThemeParamsColorPicker {
  cursorSize: number;
  sliderHeight: number;
}

export interface KitDefaultThemeParamsDatePicker {
  dateCellPadding: number;
  datePadding: number;
}

export interface KitDefaultThemeParamsMenu {
  titleFontSize: string;
}

export interface KitDefaultThemeParamsSpinner {
  duration: string;
  size: number;
  type: string;
}

export interface KitDefaultThemeParamsTypo {
  fontSize: string;
  headingFontSizes: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
}

export interface KitDefaultThemeParamsShadows {
  deep: string;
  element: string;
  overlay: string;
}

export interface KitDefaultThemeParamsTransitions {
  'default': string;
}

export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]>; };
export type KitDefaultThemeParamsDef = DeepPartial<KitDefaultThemeParams>;
