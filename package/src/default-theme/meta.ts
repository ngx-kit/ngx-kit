export interface KitDefaultThemeParams {
  borders: KitDefaultThemeParamsBorders;
  colors: KitDefaultThemeParamsColors;
  grid: KitDefaultThemeParamsGrid;
  moduleAccordion: KitDefaultThemeParamsAccordion;
  moduleAlert: KitDefaultThemeParamsAlert;
  moduleAutoComplete: KitDefaultThemeParamsAutoComplete;
  moduleBadge: KitDefaultThemeParamsBadge;
  moduleButton: KitDefaultThemeParamsButton;
  moduleCheckbox: KitDefaultThemeParamsCheckbox;
  moduleDatePicker: any;
  moduleDropdownMenu: KitDefaultThemeParamsDropdownMenu;
  moduleForm: KitDefaultThemeParamsForm;
  moduleInput: KitDefaultThemeParamsInput;
  moduleLoadingBar: KitDefaultThemeParamsLoadingBar;
  moduleMenu: KitDefaultThemeParamsMenu;
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

export interface KitDefaultThemeParamsColors {
  [key: string]: string;
}

export interface KitDefaultThemeParamsGrid {
  h: number;
  v: number;
}

export interface KitDefaultThemeParamsAccordion {
  colors: {
    border: string;
    title: {
      background: string;
      text: string;
    };
    content: {
      background: string;
      text: string;
    }
  };
}

export interface KitDefaultThemeParamsAlert {
  colors: {
    info: KitDefaultThemeParamsAlertColor;
    success: KitDefaultThemeParamsAlertColor;
    warning: KitDefaultThemeParamsAlertColor;
    error: KitDefaultThemeParamsAlertColor;
  };
}

export interface KitDefaultThemeParamsAlertColor {
  background: string,
  border: string,
  text: string,
}

export interface KitDefaultThemeParamsAutoComplete {
  colors: {
    results: {
      background: string;
    };
  };
}

export interface KitDefaultThemeParamsBadge {
  colors: {
    [key: string]: KitDefaultThemeParamsBadgeColor;
  };
}

export interface KitDefaultThemeParamsBadgeColor {
  background: string;
  border: string;
  text: string;
}

export interface KitDefaultThemeParamsButton {
  colors: {
    [key: string]: KitDefaultThemeParamsButtonColor;
  };
}

export interface KitDefaultThemeParamsButtonColor {
  active: KitDefaultThemeParamsButtonColorState;
  base: KitDefaultThemeParamsButtonColorState;
  disabled: KitDefaultThemeParamsButtonColorState;
  hover: KitDefaultThemeParamsButtonColorState;
}

export interface KitDefaultThemeParamsButtonColorState {
  background: string;
  border: string;
  text: string;
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
    base: {
      background: string;
      border: string;
      text: string;
    };
    hover: {
      background: string;
      border: string;
      text: string;
    };
    focus: {
      background: string;
      border: string;
      text: string;
    };
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
      base: {
        background: string;
        border: string;
        text: string;
      };
      hover: {
        background: string;
        border: string;
        text: string;
      };
      disabled: {
        background: string;
        border: string;
        text: string;
      };
    };
    separator: string;
  },
  titleFontSize: string;
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
    base: {
      background: string;
      border: string;
      text: string;
    };
    hover: {
      background: string;
      border: string;
      text: string;
    };
    selected: {
      background: string;
      border: string;
      text: string;
    };
  };
}

export interface KitDefaultThemeParamsSpinner {
  defaultColor: string;
  duration: string;
  size: number;
  type: string;
}

export interface KitDefaultThemeParamsTag {
  colors: {
    'default': {
      background: string;
      border: string;
      text: string;
    };
    primary: {
      background: string;
      border: string;
      text: string;
    };
    success: {
      background: string;
      border: string;
      text: string;
    };
    error: {
      background: string;
      border: string;
      text: string;
    };
    warning: {
      background: string;
      border: string;
      text: string;
    };
  };
}

export interface KitDefaultThemeParamsTextarea {
  colors: {
    base: {
      background: string;
      border: string;
      text: string;
    };
    hover: {
      background: string;
      border: string;
      text: string;
    };
    focus: {
      background: string;
      border: string;
      text: string;
    };
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
    text: {
      background: string;
      text: string;
    };
    link: {
      base: {
        background: string;
        text: string;
      };
      hover: {
        background: string;
        text: string;
      };
      focus: {
        background: string;
        text: string;
      };
      visited: {
        background: string;
        text: string;
      };
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
