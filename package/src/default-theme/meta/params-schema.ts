const basicColorSet = {
  background: 'color',
  border: 'color',
  text: 'color',
};
const buttonColor = {
  base: basicColorSet,
  hover: basicColorSet,
  active: basicColorSet,
  disabled: basicColorSet,
};
const alertColor = {
  ...basicColorSet,
  closeText: 'color',
  titleText: 'color',
};
const notificationColor = {
  background: 'color',
  border: 'color',
  titleText: 'color',
  messageText: 'color',
};
const typoColorSet = {
  background: 'color',
  text: 'color',
};
export const paramsSchema = {
  grid: {
    h: 'number',
    v: 'number',
  },
  borders: {
    radius: 'number',
    width: 'number',
  },
  shadows: {
    element: 'string',
    deep: 'string',
    overlay: 'string',
  },
  transitions: {
    'default': 'string',
  },
  moduleAccordion: {
    colors: {
      border: 'color',
      title: {
        background: 'color',
        text: 'color',
      },
      content: {
        background: 'color',
        text: 'color',
      },
    },
  },
  moduleAlert: {
    titleFontSize: 'string',
    colors: {
      info: alertColor,
      success: alertColor,
      warning: alertColor,
      error: alertColor,
    },
  },
  moduleAutoComplete: {
    colors: {
      resultItem: {
        base: basicColorSet,
        hover: basicColorSet,
        active: basicColorSet,
      },
    },
  },
  moduleBadge: {
    colors: {
      'default': basicColorSet,
      primary: basicColorSet,
      success: basicColorSet,
      warning: basicColorSet,
      error: basicColorSet,
    },
  },
  moduleButton: {
    colors: {
      'default': buttonColor,
      primary: buttonColor,
      success: buttonColor,
      warning: buttonColor,
      error: buttonColor,
    },
  },
  moduleCheckbox: {
    colors: {
      base: {
        background: 'color',
        border: 'color',
      },
      checked: basicColorSet,
    },
  },
  moduleColorPicker: {
    colors: {
      cursor: {
        background: 'color',
        border: 'color',
      },
      popup: basicColorSet,
    },
    cursorSize: 'number',
    sliderHeight: 'number',
  },
  moduleDivider: {
    colors: {
      topLine: 'color',
      bottomLine: 'color',
    },
  },
  moduleDropdownMenu: {
    colors: {
      menu: {
        border: 'color',
      },
      item: {
        base: basicColorSet,
        hover: basicColorSet,
        active: basicColorSet,
      },
    },
  },
  moduleForm: {
    colors: {
      error: {
        border: 'color',
        text: 'color',
      },
    },
  },
  moduleInput: {
    colors: {
      base: basicColorSet,
      hover: basicColorSet,
      focus: basicColorSet,
    },
  },
  moduleLoadingBar: {
    colors: {
      background: 'color',
      shadow: 'color',
    },
  },
  moduleMenu: {
    titleFontSize: 'string',
    colors: {
      menu: basicColorSet,
      item: {
        base: basicColorSet,
        hover: basicColorSet,
        disabled: basicColorSet,
      },
      groupTitle: typoColorSet,
      separator: 'color',
      sub: {
        background: 'color',
        border: 'color',
      },
      subItem: {
        base: basicColorSet,
        hover: basicColorSet,
        disabled: basicColorSet,
      },
    },
  },
  moduleModal: {
    colors: {
      header: basicColorSet,
      body: typoColorSet,
      footer: basicColorSet,
    },
  },
  moduleNotification: {
    colors: {
      'default': notificationColor,
      primary: notificationColor,
      success: notificationColor,
      warning: notificationColor,
      error: notificationColor,
    },
  },
  moduleRadio: {
    colors: {
      base: {
        background: 'color',
        border: 'color',
      },
      hover: {
        background: 'color',
        border: 'color',
      },
      checked: {
        background: 'color',
        border: 'color',
        dot: 'color',
      },
    },
  },
  moduleSelect: {
    colors: {
      select: {
        base: basicColorSet,
        hover: basicColorSet,
        focus: basicColorSet,
      },
      option: {
        base: basicColorSet,
        hover: basicColorSet,
        selected: basicColorSet,
      },
    },
  },
  moduleSpinner: {
    duration: 'string',
    size: 'number',
    type: 'string',
    colors: {
      'default': 'color',
    },
  },
  moduleTabs: {
    colors: {
      nav: {
        base: basicColorSet,
        hover: basicColorSet,
        active: basicColorSet,
      },
      panel: basicColorSet,
    },
  },
  moduleTag: {
    colors: {
      'default': basicColorSet,
      primary: basicColorSet,
      success: basicColorSet,
      warning: basicColorSet,
      error: basicColorSet,
    },
  },
  moduleTextarea: {
    colors: {
      base: basicColorSet,
      hover: basicColorSet,
      focus: basicColorSet,
    },
  },
  moduleToggle: {
    colors: {
      base: {
        background: 'color',
        border: 'color',
        toggle: 'color',
      },
      checked: {
        background: 'color',
        border: 'color',
        toggle: 'color',
      },
    },
  },
  moduleTooltip: {
    colors: {
      tooltip: basicColorSet,
    },
  },
  moduleTypo: {
    fontSize: 'string',
    headingFontSizes: {
      h1: 'string',
      h2: 'string',
      h3: 'string',
      h4: 'string',
      h5: 'string',
      h6: 'string',
    },
    colors: {
      text: typoColorSet,
      link: {
        base: typoColorSet,
        hover: typoColorSet,
        focus: typoColorSet,
        visited: typoColorSet,
      },
    },
  },
};
