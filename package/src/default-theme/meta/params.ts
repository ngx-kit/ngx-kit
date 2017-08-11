export interface ColorsSet {
  background: string;
  border: string;
  text: string;
}

export interface TypoColorsSet {
  background: string;
  text: string;
}

export interface KitDefaultThemeParams {
  borders: KitDefaultThemeParamsBorders;
  grid: KitDefaultThemeParamsGrid;
  moduleAccordion: KitDefaultThemeParamsAccordion;
  moduleAlert: KitDefaultThemeParamsAlert;
  moduleAutoComplete: KitDefaultThemeParamsAutoComplete;
  moduleBadge: KitDefaultThemeParamsBadge;
  moduleButton: KitDefaultThemeParamsButton;
  moduleCheckbox: KitDefaultThemeParamsCheckbox;
  moduleColorPicker: KitDefaultThemeParamsColorPicker;
  moduleDropdownMenu: KitDefaultThemeParamsDropdownMenu;
  moduleForm: KitDefaultThemeParamsForm;
  moduleInput: KitDefaultThemeParamsInput;
  moduleLoadingBar: KitDefaultThemeParamsLoadingBar;
  moduleMenu: KitDefaultThemeParamsMenu;
  moduleNotification: KitDefaultThemeParamsNotification;
  moduleRadio: KitDefaultThemeParamsRadio;
  moduleSelect: KitDefaultThemeParamsSelect;
  moduleSpinner: KitDefaultThemeParamsSpinner;
  moduleTag: KitDefaultThemeParamsTag;
  moduleTextarea: KitDefaultThemeParamsTextarea;
  moduleToggle: KitDefaultThemeParamsToggle;
  moduleTypo: KitDefaultThemeParamsTypo;
  shadows: KitDefaultThemeParamsShadows;
  transitions: KitDefaultThemeParamsTransitions;
}

export interface KitDefaultThemeParamsBorders {
  radius: {
    s: number;
    m: number;
    l: number;
  };
  width: number;
}

export interface KitDefaultThemeParamsGrid {
  h: number;
  v: number;
}

export interface KitDefaultThemeParamsAccordion {
  colors: {
    border: string;
    title: TypoColorsSet;
    content: TypoColorsSet;
  };
}

export interface KitDefaultThemeParamsAlert {
  colors: {
    info: KitDefaultThemeParamsAlertColor;
    success: KitDefaultThemeParamsAlertColor;
    warning: KitDefaultThemeParamsAlertColor;
    error: KitDefaultThemeParamsAlertColor;
  };
  titleFontSize: string;
}

export interface KitDefaultThemeParamsAlertColor {
  background: string;
  border: string;
  closeText: string;
  text: string;
  titleText: string;
}

export interface KitDefaultThemeParamsAutoComplete {
  colors: {
    resultItem: {
      base: ColorsSet;
      hover: ColorsSet;
      active: ColorsSet;
    }
  };
}

export interface KitDefaultThemeParamsBadge {
  colors: {
    [key: string]: ColorsSet;
  };
}

export interface KitDefaultThemeParamsButton {
  colors: {
    [key: string]: KitDefaultThemeParamsButtonColor;
  };
}

export interface KitDefaultThemeParamsButtonColor {
  active: ColorsSet;
  base: ColorsSet;
  disabled: ColorsSet;
  hover: ColorsSet;
}

export interface KitDefaultThemeParamsCheckbox {
  colors: {
    base: {
      background: string;
      border: string;
    };
    checked: {
      background: string;
      border: string;
      check: string;
    };
  };
}

export interface KitDefaultThemeParamsColorPicker {
  colors: {
    cursor: {
      background: string;
      border: string;
    };
    popup: ColorsSet;
  };
  cursorSize: number;
  sliderHeight: number;
}

export interface KitDefaultThemeParamsDropdownMenu {
  colors: {
    menu: {
      background: string;
      border: string;
    };
  };
}

export interface KitDefaultThemeParamsForm {
  colors: {
    error: {
      border: string;
      text: string;
    };
  };
}

export interface KitDefaultThemeParamsInput {
  colors: {
    base: ColorsSet;
    hover: ColorsSet;
    focus: ColorsSet;
  };
}

export interface KitDefaultThemeParamsLoadingBar {
  colors: {
    background: string;
    shadow: string;
  };
}

export interface KitDefaultThemeParamsMenu {
  colors: {
    item: {
      base: ColorsSet;
      hover: ColorsSet;
      disabled: ColorsSet;
    };
    groupTitle: {
      background: string;
      text: string;
    };
    separator: string;
  },
  titleFontSize: string;
}

export interface KitDefaultThemeParamsNotification {
  colors: {
    'default': KitDefaultThemeParamsNotificationColor;
    primary: KitDefaultThemeParamsNotificationColor;
    success: KitDefaultThemeParamsNotificationColor;
    warning: KitDefaultThemeParamsNotificationColor;
    error: KitDefaultThemeParamsNotificationColor;
  };
}

export interface KitDefaultThemeParamsNotificationColor {
  background: string;
  border: string;
  messageText: string;
  titleText: string;
}

export interface KitDefaultThemeParamsRadio {
  colors: {
    base: {
      background: string;
      border: string;
    };
    hover: {
      background: string;
      border: string;
    };
    checked: {
      background: string;
      border: string;
      dot: string;
    };
  };
}

export interface KitDefaultThemeParamsSelect {
  colors: {
    select: {
      base: KitDefaultThemeParamsSelectColor;
      hover: KitDefaultThemeParamsSelectColor;
      focus: KitDefaultThemeParamsSelectColor;
    };
    option: {
      base: KitDefaultThemeParamsSelectColor;
      hover: KitDefaultThemeParamsSelectColor;
      selected: KitDefaultThemeParamsSelectColor;
    };
  };
}

export interface KitDefaultThemeParamsSelectColor {
  background: string;
  border: string;
  text: string;
}

export interface KitDefaultThemeParamsSpinner {
  colors: {
    'default': string;
  }
  duration: string;
  size: number;
  type: string;
}

export interface KitDefaultThemeParamsTag {
  colors: {
    'default': ColorsSet;
    primary: ColorsSet;
    success: ColorsSet;
    error: ColorsSet;
    warning: ColorsSet;
  };
}

export interface KitDefaultThemeParamsTextarea {
  colors: {
    base: ColorsSet;
    hover: ColorsSet;
    focus: ColorsSet;
  };
}

export interface KitDefaultThemeParamsToggle {
  colors: {
    base: {
      background: string;
      border: string;
      toggle: string;
    };
    checked: {
      background: string;
      border: string;
      toggle: string;
    };
  };
}

export interface KitDefaultThemeParamsTypo {
  colors: {
    text: TypoColorsSet;
    link: {
      base: TypoColorsSet;
      hover: TypoColorsSet;
      focus: TypoColorsSet;
      visited: TypoColorsSet;
    };
  };
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
