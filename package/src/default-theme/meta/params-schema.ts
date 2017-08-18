const basicColorSet = {
  background: 'color',
  border: 'color',
  text: 'color',
};
const typoColorSet = {
  background: 'color',
  text: 'color',
};
const defaultColors = ['default', 'primary', 'info', 'success', 'warning', 'error'];
function colorize(set: string[], colorSchema: any) {
  return set.reduce((prev, curr) => {
    prev[curr] = colorSchema;
    return prev;
  }, {});
}
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
    colors: colorize(defaultColors, {
      ...basicColorSet,
      closeText: 'color',
      titleText: 'color',
    }),
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
    colors: colorize(defaultColors, basicColorSet),
  },
  moduleButton: {
    colors: colorize(defaultColors, {
      base: basicColorSet,
      hover: basicColorSet,
      active: basicColorSet,
      disabled: basicColorSet,
    }),
  },
  moduleCheckbox: {
    colors: {
      base: {
        background: 'color',
        border: 'color',
      },
      checked: {
        background: 'color',
        border: 'color',
        check: 'color',
      },
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
  moduleDatePicker: {
    colors: {
      picker: typoColorSet,
      weekday: typoColorSet,
      date: {
        base: basicColorSet,
        hover: basicColorSet,
        active: basicColorSet,
        outside: basicColorSet,
      },
    },
    dateCellPadding: 'number',
    datePadding: 'number',
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
    colors: colorize(defaultColors, {
      background: 'color',
      border: 'color',
      titleText: 'color',
      messageText: 'color',
    }),
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
      options: basicColorSet,
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
    colors: colorize(defaultColors, basicColorSet),
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
