export interface ColorsSet {
  background: string;
  border: string;
  text: string;
}

export interface TypoColorsSet {
  background: string;
  text: string;
}

export type DefaultColors = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';

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
  moduleDatePicker: KitDefaultThemeParamsDatePicker;
  moduleDivider: KitDefaultThemeParamsDivider;
  moduleDropdownMenu: KitDefaultThemeParamsDropdownMenu;
  moduleForm: KitDefaultThemeParamsForm;
  moduleInput: KitDefaultThemeParamsInput;
  moduleLoadingBar: KitDefaultThemeParamsLoadingBar;
  moduleMenu: KitDefaultThemeParamsMenu;
  moduleModal: KitDefaultThemeParamsModal;
  moduleNotification: KitDefaultThemeParamsNotification;
  moduleRadio: KitDefaultThemeParamsRadio;
  moduleSelect: KitDefaultThemeParamsSelect;
  moduleSpinner: KitDefaultThemeParamsSpinner;
  moduleTabs: KitDefaultThemeParamsTabs,
  moduleTag: KitDefaultThemeParamsTag;
  moduleTextarea: KitDefaultThemeParamsTextarea;
  moduleToggle: KitDefaultThemeParamsToggle;
  moduleTooltip: KitDefaultThemeParamsTooltip;
  moduleTypo: KitDefaultThemeParamsTypo;
  shadows: KitDefaultThemeParamsShadows;
  transitions: KitDefaultThemeParamsTransitions;
}

export interface KitDefaultThemeParamsBorders {
  radius: number;
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
  colors: {[key in DefaultColors]: KitDefaultThemeParamsAlertColor};
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
  colors: {[key in DefaultColors]: ColorsSet};
}

export interface KitDefaultThemeParamsButton {
  colors: {[key in DefaultColors]: KitDefaultThemeParamsButtonColor};
}

export interface KitDefaultThemeParamsButtonColor {
  active: ColorsSet;
  base: ColorsSet;
  disabled: ColorsSet;
  hover: ColorsSet;
}

export interface KitDefaultThemeParamsCheckbox {
  colors: {
    nonChecked: {[key in 'base' | 'hover' | 'focus' | 'disabled' | 'readonly']: {
      background: string;
      border: string;
    }};
    checked: {[key in 'base' | 'hover' | 'focus' | 'disabled' | 'readonly']: {
      background: string;
      border: string;
      check: string;
    }};
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

export interface KitDefaultThemeParamsDatePicker {
  colors: {
    picker: TypoColorsSet;
    weekday: TypoColorsSet;
    date: {
      base: ColorsSet;
      hover: ColorsSet;
      active: ColorsSet;
      outside: ColorsSet;
    };
  };
  dateCellPadding: number;
  datePadding: number;
}

export interface KitDefaultThemeParamsDivider {
  colors: {
    topLine: string;
    bottomLine: string;
  };
}

export interface KitDefaultThemeParamsDropdownMenu {
  colors: {
    menu: {
      border: string;
    };
    item: {
      base: ColorsSet;
      hover: ColorsSet;
      active: ColorsSet;
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
    readonly: ColorsSet;
    disabled: ColorsSet;
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
    menu: ColorsSet,
    item: {
      base: ColorsSet;
      hover: ColorsSet;
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
      disabled: ColorsSet;
    };
  };
  titleFontSize: string;
}

export interface KitDefaultThemeParamsModal {
  colors: {
    header: ColorsSet;
    body: TypoColorsSet;
    footer: ColorsSet;
  };
}

export interface KitDefaultThemeParamsNotification {
  colors: {[key in DefaultColors]: KitDefaultThemeParamsNotificationColor};
}

export interface KitDefaultThemeParamsNotificationColor {
  background: string;
  border: string;
  messageText: string;
  titleText: string;
}

export interface KitDefaultThemeParamsRadio {
  colors: {
    nonChecked: {[key in 'base' | 'hover' | 'focus' | 'disabled']: {
      background: string;
      border: string;
    }};
    checked: {[key in 'base' | 'hover' | 'focus' | 'disabled']: {
      background: string;
      border: string;
      dot: string;
    }};
  };
}

export interface KitDefaultThemeParamsSelect {
  colors: {
    select: {
      base: KitDefaultThemeParamsSelectColor;
      hover: KitDefaultThemeParamsSelectColor;
      focus: KitDefaultThemeParamsSelectColor;
      disabled: KitDefaultThemeParamsSelectColor;
    };
    option: {
      base: KitDefaultThemeParamsSelectColor;
      hover: KitDefaultThemeParamsSelectColor;
      selected: KitDefaultThemeParamsSelectColor;
      disabled: KitDefaultThemeParamsSelectColor;
    };
    options: ColorsSet;
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
  colors: {[key in DefaultColors]: ColorsSet};
}

export interface KitDefaultThemeParamsTabs {
  colors: {
    nav: {
      base: ColorsSet;
      hover: ColorsSet;
      active: ColorsSet;
    };
    panel: ColorsSet;
  };
}

export interface KitDefaultThemeParamsTextarea {
  colors: {
    base: ColorsSet;
    hover: ColorsSet;
    focus: ColorsSet;
    readonly: ColorsSet;
    disabled: ColorsSet;
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

export interface KitDefaultThemeParamsTooltip {
  colors: {
    tooltip: ColorsSet;
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
