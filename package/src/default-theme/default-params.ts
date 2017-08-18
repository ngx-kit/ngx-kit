import {
  KitDefaultThemeParams,
  KitDefaultThemeParamsAlert,
  KitDefaultThemeParamsBadge,
  KitDefaultThemeParamsButton,
  KitDefaultThemeParamsCheckbox,
  KitDefaultThemeParamsColorPicker,
  KitDefaultThemeParamsInput,
  KitDefaultThemeParamsNotification,
  KitDefaultThemeParamsTag,
} from './meta/params';

export class KitDefaultThemeDefaultParams implements KitDefaultThemeParams {
  borders = {
    radius: 2,
    width: 1,
  };

  grid = {
    h: 8,
    v: 8,
  };

  moduleAccordion = {
    colors: {
      border: '#e2e2e2',
      title: {
        background: '#efefef',
        text: '#404040',
      },
      content: {
        background: '#fafafa',
        text: '#404040',
      },
    },
  };

  moduleAlert: KitDefaultThemeParamsAlert = {
    titleFontSize: '1.2em',
    colors: {
      'default': {
        background: '#92ccff',
        border: '#0084ff',
        text: `rgba(0,0,0,.7)`,
        closeText: '#0071e2',
        titleText: `rgba(0,0,0,.9)`,
      },
      primary: {
        background: '#92ccff',
        border: '#0084ff',
        text: `rgba(0,0,0,.7)`,
        closeText: '#0071e2',
        titleText: `rgba(0,0,0,.9)`,
      },
      info: {
        background: '#92ccff',
        border: '#0084ff',
        text: `rgba(0,0,0,.7)`,
        closeText: '#0071e2',
        titleText: `rgba(0,0,0,.9)`,
      },
      success: {
        background: '#a5e396',
        border: '#2dc100',
        text: `rgba(0,0,0,.7)`,
        closeText: '#2bab00',
        titleText: `rgba(0,0,0,.9)`,
      },
      warning: {
        background: '#fff198',
        border: '#ffb62f',
        text: `rgba(0,0,0,.7)`,
        closeText: '#e0a527',
        titleText: `rgba(0,0,0,.9)`,
      },
      error: {
        background: '#ffcdca',
        border: '#ff5500',
        text: `rgba(0,0,0,.7)`,
        closeText: '#e14c00',
        titleText: `rgba(0,0,0,.9)`,
      },
    },
  };

  moduleAutoComplete = {
    colors: {
      resultItem: {
        base: {
          background: '#fafafa',
          border: '#e2e2e2',
          text: '#404040',
        },
        hover: {
          background: '#0084ff',
          border: '#0084ff',
          text: '#fff',
        },
        active: {
          background: '#0084ff',
          border: '#0084ff',
          text: '#fff',
        },
      },
    },
  };

  moduleBadge: KitDefaultThemeParamsBadge = {
    colors: {
      'default': {
        background: '#0084ff',
        border: '#0084ff',
        text: '#fff',
      },
      primary: {
        background: '#0084ff',
        border: '#0084ff',
        text: '#fff',
      },
      info: {
        background: '#0084ff',
        border: '#0084ff',
        text: '#fff',
      },
      success: {
        background: '#0084ff',
        border: '#0084ff',
        text: '#fff',
      },
      warning: {
        background: '#0084ff',
        border: '#0084ff',
        text: '#fff',
      },
      error: {
        background: '#0084ff',
        border: '#0084ff',
        text: '#fff',
      },
    },
  };

  moduleButton: KitDefaultThemeParamsButton = {
    colors: {
      'default': {
        base: {
          background: '#dadada',
          border: '#dadada',
          text: '#404040',
        },
        hover: {
          background: '#cacaca',
          border: '#cacaca',
          text: '#404040',
        },
        active: {
          background: '#b0b0b0',
          border: '#cacaca',
          text: '#404040',
        },
        disabled: {
          background: '#8c8c8c',
          border: '#8c8c8c',
          text: '#707070',
        },
      },
      primary: {
        base: {
          background: '#0084ff',
          border: '#0084ff',
          text: '#fff',
        },
        hover: {
          background: '#0071e2',
          border: '#0071e2',
          text: '#fff',
        },
        active: {
          background: '#0066cb',
          border: '#0066cb',
          text: '#fff',
        },
        disabled: {
          background: '#8c8c8c',
          border: '#8c8c8c',
          text: '#707070',
        },
      },
      info: {
        base: {
          background: '#0084ff',
          border: '#0084ff',
          text: '#fff',
        },
        hover: {
          background: '#0071e2',
          border: '#0071e2',
          text: '#fff',
        },
        active: {
          background: '#0066cb',
          border: '#0066cb',
          text: '#fff',
        },
        disabled: {
          background: '#8c8c8c',
          border: '#8c8c8c',
          text: '#707070',
        },
      },
      success: {
        base: {
          background: '#2dc100',
          border: '#2dc100',
          text: '#fff',
        },
        hover: {
          background: '#2bab00',
          border: '#2bab00',
          text: '#fff',
        },
        active: {
          background: '#259100',
          border: '#259100',
          text: '#fff',
        },
        disabled: {
          background: '#8c8c8c',
          border: '#8c8c8c',
          text: '#707070',
        },
      },
      warning: {
        base: {
          background: '#0084ff',
          border: '#0084ff',
          text: '#fff',
        },
        hover: {
          background: '#0071e2',
          border: '#0071e2',
          text: '#fff',
        },
        active: {
          background: '#0066cb',
          border: '#0066cb',
          text: '#fff',
        },
        disabled: {
          background: '#8c8c8c',
          border: '#8c8c8c',
          text: '#707070',
        },
      },
      error: {
        base: {
          background: '#0084ff',
          border: '#0084ff',
          text: '#fff',
        },
        hover: {
          background: '#0071e2',
          border: '#0071e2',
          text: '#fff',
        },
        active: {
          background: '#0066cb',
          border: '#0066cb',
          text: '#fff',
        },
        disabled: {
          background: '#8c8c8c',
          border: '#8c8c8c',
          text: '#707070',
        },
      },
    },
  };

  moduleCheckbox: KitDefaultThemeParamsCheckbox = {
    colors: {
      nonChecked: {
        base: {
          background: '#f4f4f4',
          border: '#e2e2e2',
        },
        hover: {
          background: '#f4f4f4',
          border: '#e2e2e2',
        },
        focus: {
          background: '#f4f4f4',
          border: '#e2e2e2',
        },
        disabled: {
          background: '#f4f4f4',
          border: '#e2e2e2',
        },
        readonly: {
          background: '#f4f4f4',
          border: '#e2e2e2',
        },
      },
      checked: {
        base: {
          background: '#f4f4f4',
          border: '#0084ff',
          check: '#0084ff',
        },
        hover: {
          background: '#f4f4f4',
          border: '#0084ff',
          check: '#0084ff',
        },
        focus: {
          background: '#f4f4f4',
          border: '#0084ff',
          check: '#0084ff',
        },
        disabled: {
          background: '#f4f4f4',
          border: '#0084ff',
          check: '#0084ff',
        },
        readonly: {
          background: '#f4f4f4',
          border: '#0084ff',
          check: '#0084ff',
        },
      },
    },
  };

  moduleColorPicker: KitDefaultThemeParamsColorPicker = {
    colors: {
      cursor: {
        background: '#f4f4f4',
        border: '#f4f4f4',
      },
      popup: {
        background: '#f4f4f4',
        border: '#e2e2e2',
        text: '#404040',
      },
    },
    cursorSize: 10,
    sliderHeight: 16,
  };

  moduleDatePicker = {
    colors: {
      picker: {
        background: 'transparent',
        text: '#404040',
      },
      weekday: {
        background: 'transparent',
        text: '#404040',
      },
      date: {
        base: {
          background: 'transparent',
          border: 'transparent',
          text: '#404040',
        },
        hover: {
          background: '#cacaca',
          border: '#cacaca',
          text: '#404040',
        },
        active: {
          background: '#b0b0b0',
          border: '#b0b0b0',
          text: '#404040',
        },
        outside: {
          background: 'transparent',
          border: 'transparent',
          text: '#8c8c8c',
        },
      },
    },
    dateCellPadding: 4,
    datePadding: 0,
  };

  moduleDivider = {
    colors: {
      topLine: 'rgba(34,36,38,.15)',
      bottomLine: '1px solid rgba(255,255,255,.1)',
    },
  };

  moduleDropdownMenu = {
    colors: {
      menu: {
        border: '#e2e2e2',
      },
      item: {
        base: {
          background: '#fafafa',
          border: '#eee',
          text: '#404040',
        },
        hover: {
          background: '#f0f0f0',
          border: '#eee',
          text: '#404040',
        },
        active: {
          background: '#f0f0f0',
          border: '#eee',
          text: '#404040',
        },
      },
    },
  };

  moduleForm = {
    colors: {
      error: {
        border: '#ff5500',
        text: '#ff5500',
      },
    },
  };

  moduleInput: KitDefaultThemeParamsInput = {
    colors: {
      base: {
        background: '#f4f4f4',
        border: '#e2e2e2',
        text: '#585858',
      },
      hover: {
        background: '#f4f4f4',
        border: '#cacaca',
        text: '#585858',
      },
      focus: {
        background: '#f4f4f4',
        border: '#0084ff',
        text: '#404040',
      },
      disabled: {
        background: '#e2e2e2',
        border: '#cacaca',
        text: '#707070',
      },
      readonly: {
        background: '#f4f4f4',
        border: '#e2e2e2',
        text: '#585858',
      },
    },
  };

  moduleLoadingBar = {
    colors: {
      background: '#0066cb',
      shadow: '#0084ff',
    },
  };

  moduleMenu = {
    titleFontSize: '.9rem',
    colors: {
      menu: {
        background: 'transparent',
        border: 'rgba(0,0,0,.1)',
        text: '#404040',
      },
      item: {
        base: {
          background: 'transparent',
          border: 'transparent',
          text: '#707070',
        },
        hover: {
          background: 'transparent',
          border: 'rgba(0,0,0,.1)',
          text: '#707070',
        },
        disabled: {
          background: 'transparent',
          border: 'transparent',
          text: '#cacaca',
        },
      },
      groupTitle: {
        background: 'transparent',
        text: '#8c8c8c',
      },
      separator: '#e2e2e2',
      sub: {
        background: '#fff',
        border: '#e9e9e9',
      },
      subItem: {
        base: {
          background: 'transparent',
          border: 'transparent',
          text: '#707070',
        },
        hover: {
          background: 'transparent',
          border: 'rgba(0,0,0,.1)',
          text: '#707070',
        },
        disabled: {
          background: 'transparent',
          border: 'transparent',
          text: '#cacaca',
        },
      },
    },
  };

  moduleModal = {
    colors: {
      header: {
        background: '#d6eeff',
        border: '#e2e2e2',
        text: '#707070',
      },
      body: {
        background: '#fff',
        text: '#404040',
      },
      footer: {
        background: '#fff',
        border: '#e2e2e2',
        text: '#707070',
      },
    },
  };

  moduleNotification: KitDefaultThemeParamsNotification = {
    colors: {
      'default': {
        background: '#404040',
        border: '#404040',
        titleText: '#fff',
        messageText: '#f4f4f4',
      },
      primary: {
        background: '#0084ff',
        border: '#0084ff',
        titleText: '#fff',
        messageText: '#f4f4f4',
      },
      info: {
        background: '#0084ff',
        border: '#0084ff',
        titleText: '#fff',
        messageText: '#f4f4f4',
      },
      success: {
        background: '#2dc100',
        border: '#2dc100',
        titleText: '#fff',
        messageText: '#f4f4f4',
      },
      warning: {
        background: '#ffb62f',
        border: '#ffb62f',
        titleText: '#fff',
        messageText: '#f4f4f4',
      },
      error: {
        background: '#ff5500',
        border: '#ff5500',
        titleText: '#fff',
        messageText: '#f4f4f4',
      },
    },
  };

  moduleRadio = {
    colors: {
      base: {
        background: '#f4f4f4',
        border: '#e2e2e2',
      },
      hover: {
        background: '#f4f4f4',
        border: '#cacaca',
      },
      checked: {
        background: '#f4f4f4',
        border: '#0084ff',
        dot: '#0084ff',
      },
    },
  };

  moduleSelect = {
    colors: {
      select: {
        base: {
          background: '#f4f4f4',
          border: '#e2e2e2',
          text: '#585858',
        },
        hover: {
          background: '#f4f4f4',
          border: '#cacaca',
          text: '#585858',
        },
        focus: {
          background: '#f4f4f4',
          border: '#0084ff',
          text: '#404040',
        },
      },
      option: {
        base: {
          background: '#f4f4f4',
          border: '#e2e2e2',
          text: '#585858',
        },
        hover: {
          background: '#0084ff',
          border: '#0084ff',
          text: '#fff',
        },
        selected: {
          background: '#0084ff',
          border: '#0084ff',
          text: '#fff',
        },
      },
      options: {
        background: '#f4f4f4',
        border: '#e2e2e2',
        text: '#585858',
      },
    },
  };

  moduleSpinner = {
    duration: '1.5s',
    size: 50,
    type: 'spin-1',
    colors: {
      'default': '#0084ff',
    },
  };

  moduleTabs = {
    colors: {
      nav: {
        base: {
          background: '#fff',
          border: '#d9d9d9',
          text: '#404040',
        },
        hover: {
          background: '#e2e2e2',
          border: '#d9d9d9',
          text: '#404040',
        },
        active: {
          background: '#dadada',
          border: '#d9d9d9',
          text: '#404040',
        },
      },
      panel: {
        background: '#fff',
        border: '#d9d9d9',
        text: '#404040',
      },
    },
  };

  moduleTag: KitDefaultThemeParamsTag = {
    colors: {
      'default': {
        background: '#dadada',
        border: '#dadada',
        text: '#404040',
      },
      primary: {
        background: '#0084ff',
        border: '#0084ff',
        text: '#fff',
      },
      info: {
        background: '#0084ff',
        border: '#0084ff',
        text: '#fff',
      },
      success: {
        background: '#dadada',
        border: '#dadada',
        text: '#404040',
      },
      error: {
        background: '#dadada',
        border: '#dadada',
        text: '#404040',
      },
      warning: {
        background: '#dadada',
        border: '#dadada',
        text: '#404040',
      },
    },
  };

  moduleTextarea = {
    colors: {
      base: {
        background: '#f4f4f4',
        border: '#e2e2e2',
        text: '#585858',
      },
      hover: {
        background: '#f4f4f4',
        border: '#cacaca',
        text: '#585858',
      },
      focus: {
        background: '#f4f4f4',
        border: '#0084ff',
        text: '#404040',
      },
    },
  };

  moduleToggle = {
    colors: {
      base: {
        background: '#f4f4f4',
        border: '#e2e2e2',
        toggle: '#fff',
      },
      checked: {
        background: '#0084ff',
        border: '#0071e2',
        toggle: '#fff',
      },
    },
  };

  moduleTooltip = {
    colors: {
      tooltip: {
        background: 'rgba(0,0,0,.6)',
        border: 'rgba(0,0,0,.65)',
        text: '#fff',
      },
    },
  };

  moduleTypo = {
    fontSize: '14px',
    headingFontSizes: {
      h1: '2.2rem',
      h2: '1.6rem',
      h3: '1.4rem',
      h4: '1.1rem',
      h5: '1rem',
      h6: '.9rem',
    },
    colors: {
      text: {
        background: 'transparent',
        text: '#404040',
      },
      link: {
        base: {
          background: 'transparent',
          text: '#0084ff',
        },
        hover: {
          background: 'transparent',
          text: '#0071e2',
        },
        focus: {
          background: 'transparent',
          text: '#0071e2',
        },
        visited: {
          background: 'transparent',
          text: '#0071e2',
        },
      },
    },
  };

  shadows = {
    element: '0 0 2px 0 rgba(50, 50, 50, 0.1)',
    deep: '0 0 20px 0 rgba(50, 50, 50, 0.1)',
    overlay: '0 0 6px 0 rgba(50, 50, 50, 0.1)',
  };

  transitions = {
    'default': 'all .3s',
  };
}
