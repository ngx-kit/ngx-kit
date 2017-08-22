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
function extract(keys: string[], schema: any) {
  return keys.reduce((prev, curr) => {
    prev[curr] = schema;
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
  colors: {
    inputs: {
      base: basicColorSet,
      hover: basicColorSet,
      focus: basicColorSet,
      readonly: basicColorSet,
      disabled: basicColorSet,
      checked: basicColorSet,
      options: {
        base: basicColorSet,
        hover: basicColorSet,
        selected: basicColorSet,
        disabled: basicColorSet,
      },
    },
    loaders: {
      base: 'color',
      shadow: 'color',
    },
    menus: {
      menu: basicColorSet,
      item: {
        base: basicColorSet,
        hover: basicColorSet,
        active: basicColorSet,
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
        active: basicColorSet,
        disabled: basicColorSet,
      },
    },
    modals: {
      modal: basicColorSet,
    },
    panels: {
      border: 'color',
      content: typoColorSet,
      title: {
        base: typoColorSet,
        hover: typoColorSet,
        active: typoColorSet,
      },
    },
    swatches: {
      ...extract(defaultColors, {
        active: 'color',
        base: 'color',
        baseText: 'color',
        disabledText: 'color',
        hover: 'color',
        light: 'color',
        lightText: 'color',
        overlay: 'color',
        overlayText: 'color',
      }),
    },
    typo: {
      text: typoColorSet,
      link: {
        base: typoColorSet,
        hover: typoColorSet,
        focus: typoColorSet,
        visited: typoColorSet,
      },
    },
  },
  shadows: {
    element: 'string',
    deep: 'string',
    overlay: 'string',
  },
  transitions: {
    'default': 'string',
  },
  moduleAlert: {
    titleFontSize: 'string',
  },
  moduleColorPicker: {
    cursorSize: 'number',
    sliderHeight: 'number',
  },
  moduleDatePicker: {
    dateCellPadding: 'number',
    datePadding: 'number',
  },
  moduleMenu: {
    titleFontSize: 'string',
  },
  moduleSpinner: {
    duration: 'string',
    size: 'number',
    type: 'string',
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
  },
};
