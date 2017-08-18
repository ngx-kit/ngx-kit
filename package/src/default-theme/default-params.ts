import {
  KitDefaultThemeParams,
  KitDefaultThemeParamsAccordion,
  KitDefaultThemeParamsAlert,
  KitDefaultThemeParamsAutoComplete,
  KitDefaultThemeParamsBadge,
  KitDefaultThemeParamsBorders,
  KitDefaultThemeParamsButton,
  KitDefaultThemeParamsCheckbox,
  KitDefaultThemeParamsColorPicker,
  KitDefaultThemeParamsDatePicker,
  KitDefaultThemeParamsDivider,
  KitDefaultThemeParamsDropdownMenu,
  KitDefaultThemeParamsForm,
  KitDefaultThemeParamsGrid,
  KitDefaultThemeParamsInput,
  KitDefaultThemeParamsLoadingBar,
  KitDefaultThemeParamsMenu,
  KitDefaultThemeParamsModal,
  KitDefaultThemeParamsNotification,
  KitDefaultThemeParamsRadio,
  KitDefaultThemeParamsSelect,
  KitDefaultThemeParamsShadows,
  KitDefaultThemeParamsSpinner,
  KitDefaultThemeParamsTabs,
  KitDefaultThemeParamsTag,
  KitDefaultThemeParamsTextarea,
  KitDefaultThemeParamsToggle,
  KitDefaultThemeParamsTooltip,
  KitDefaultThemeParamsTransitions,
  KitDefaultThemeParamsTypo,
} from './meta/params';

export class KitDefaultThemeDefaultParams implements KitDefaultThemeParams {
  borders: KitDefaultThemeParamsBorders = {
    radius: 2,
    width: 1,
  };

  grid: KitDefaultThemeParamsGrid = {
    h: 8,
    v: 8,
  };

  moduleAccordion: KitDefaultThemeParamsAccordion = {
    colors: {
      border: '#ccc',
      title: {
        background: '#f2f2f2',
        text: '#373a3c',
      },
      content: {
        background: '#fff',
        text: '#373a3c',
      },
    },
  };

  moduleAlert: KitDefaultThemeParamsAlert = {
    titleFontSize: '1.2em',
    colors: {
      'default': {
        background: '#fff',
        border: '#ccc',
        text: '#373a3c',
        closeText: '#373a3c',
        titleText: '#373a3c',
      },
      primary: {
        background: '#B2DCF6',
        border: '#186ba0',
        text: '#373a3c',
        closeText: '#186ba0',
        titleText: '#373a3c',
      },
      info: {
        background: '#cde4f2',
        border: '#31b0d5',
        text: '#373a3c',
        closeText: '#31b0d5',
        titleText: '#373a3c',
      },
      success: {
        background: '#b2e3b2',
        border: '#449d44',
        text: '#373a3c',
        closeText: '#449d44',
        titleText: '#449d44',
      },
      warning: {
        background: '#ffdcab',
        border: '#ec971f',
        text: '#373a3c',
        closeText: '#ec971f',
        titleText: '#ec971f',
      },
      error: {
        background: '#f5918e',
        border: '#c9302c',
        text: '#373a3c',
        closeText: '#c9302c',
        titleText: '#c9302c',
      },
    },
  };

  moduleAutoComplete: KitDefaultThemeParamsAutoComplete = {
    colors: {
      resultItem: {
        base: {
          background: '#fff',
          border: '#d6d6d6',
          text: '#373a3c',
        },
        hover: {
          background: '#f2f2f2',
          border: '#c0c0c0',
          text: '#373a3c',
        },
        active: {
          background: '#2399e5',
          border: '#2399e5',
          text: '#373a3c',
        },
      },
    },
  };

  moduleBadge: KitDefaultThemeParamsBadge = {
    colors: {
      default: {
        background: '#ccc',
        border: '#ccc',
        text: '#fff',
      },
      primary: {
        background: '#2399e5',
        border: '#2399e5',
        text: '#fff',
      },
      info: {
        background: '#5bc0de',
        border: '#5bc0de',
        text: '#fff',
      },
      success: {
        background: '#5cb85c',
        border: '#5cb85c',
        text: '#fff',
      },
      warning: {
        background: '#f0ad4e',
        border: '#f0ad4e',
        text: '#fff',
      },
      error: {
        background: '#d9534f',
        border: '#d9534f',
        text: '#fff',
      },
    },
  };

  moduleButton: KitDefaultThemeParamsButton = {
    colors: {
      default: {
        base: {
          background: '#fff',
          border: '#ccc',
          text: '#373a3c',
        },
        hover: {
          background: '#f2f2f2',
          border: '#ccc',
          text: '#373a3c',
        },
        active: {
          background: '#e6e6e6',
          border: '#ccc',
          text: '#373a3c',
        },
        disabled: {
          background: '#e6e6e6',
          border: '#e6e6e6',
          text: '#fff',
        },
      },
      primary: {
        base: {
          background: '#2399e5',
          border: '#2399e5',
          text: '#fff',
        },
        hover: {
          background: '#1f89ce',
          border: '#1f89ce',
          text: '#fff',
        },
        active: {
          background: '#186ba0',
          border: '#186ba0',
          text: '#fff',
        },
        disabled: {
          background: '#B2DCF6',
          border: '#B2DCF6',
          text: '#fff',
        },
      },
      info: {
        base: {
          background: '#5bc0de',
          border: '#5bc0de',
          text: '#fff',
        },
        hover: {
          background: '#46b8da',
          border: '#46b8da',
          text: '#fff',
        },
        active: {
          background: '#31b0d5',
          border: '#31b0d5',
          text: '#fff',
        },
        disabled: {
          background: '#cde4f2',
          border: '#cde4f2',
          text: '#fff',
        },
      },
      success: {
        base: {
          background: '#5cb85c',
          border: '#5cb85c',
          text: '#fff',
        },
        hover: {
          background: '#4cae4c',
          border: '#4cae4c',
          text: '#fff',
        },
        active: {
          background: '#449d44',
          border: '#449d44',
          text: '#fff',
        },
        disabled: {
          background: '#b2e3b2',
          border: '#b2e3b2',
          text: '#fff',
        },
      },
      warning: {
        base: {
          background: '#f0ad4e',
          border: '#f0ad4e',
          text: '#fff',
        },
        hover: {
          background: '#eea236',
          border: '#eea236',
          text: '#fff',
        },
        active: {
          background: '#ec971f',
          border: '#ec971f',
          text: '#fff',
        },
        disabled: {
          background: '#ffdcab',
          border: '#ffdcab',
          text: '#fff',
        },
      },
      error: {
        base: {
          background: '#d9534f',
          border: '#d9534f',
          text: '#fff',
        },
        hover: {
          background: '#d43f3a',
          border: '#d43f3a',
          text: '#fff',
        },
        active: {
          background: '#c9302c',
          border: '#c9302c',
          text: '#fff',
        },
        disabled: {
          background: '#f5918e',
          border: '#f5918e',
          text: '#fff',
        },
      },
    },
  };

  moduleCheckbox: KitDefaultThemeParamsCheckbox = {
    colors: {
      nonChecked: {
        base: {
          background: '#fff',
          border: '#ccc',
        },
        hover: {
          background: '#fff',
          border: '#2399e5',
        },
        focus: {
          background: '#fff',
          border: '#2399e5',
        },
        disabled: {
          background: '#e6e6e6',
          border: '#ccc',
        },
        readonly: {
          background: '#fff',
          border: '#ccc',
        },
      },
      checked: {
        base: {
          background: '#fff',
          border: '#2399e5',
          check: '#2399e5',
        },
        hover: {
          background: '#fff',
          border: '#1f89ce',
          check: '#1f89ce',
        },
        focus: {
          background: '#fff',
          border: '#186ba0',
          check: '#186ba0',
        },
        disabled: {
          background: '#fff',
          border: '#B2DCF6',
          check: '#B2DCF6',
        },
        readonly: {
          background: '#fff',
          border: '#2399e5',
          check: '#2399e5',
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

  moduleDatePicker: KitDefaultThemeParamsDatePicker = {
    colors: {
      picker: {
        background: '#fff',
        text: '#373a3c',
      },
      weekday: {
        background: '#F6F8FA',
        text: '#373a3c',
      },
      date: {
        base: {
          background: 'transparent',
          border: 'transparent',
          text: '#373a3c',
        },
        hover: {
          background: '#EEEEEE',
          border: 'transparent',
          text: '#373a3c',
        },
        active: {
          background: '#D6D6D6',
          border: 'transparent',
          text: '#373a3c',
        },
        outside: {
          background: 'transparent',
          border: 'transparent',
          text: '#ccc',
        },
      },
    },
    dateCellPadding: 2,
    datePadding: 4,
  };

  moduleDivider: KitDefaultThemeParamsDivider = {
    colors: {
      topLine: '#2399e5',
      bottomLine: '#1f89ce',
    },
  };

  moduleDropdownMenu: KitDefaultThemeParamsDropdownMenu = {
    colors: {
      menu: {
        border: '#ccc',
      },
      item: {
        base: {
          background: '#fff',
          border: 'transparent',
          text: '#373a3c',
        },
        hover: {
          background: '#EEEEEE',
          border: 'transparent',
          text: '#373a3c',
        },
        active: {
          background: '#186ba0',
          border: 'transparent',
          text: '#fff',
        },
      },
    },
  };

  moduleForm: KitDefaultThemeParamsForm = {
    colors: {
      error: {
        border: '#c9302c',
        text: '#c9302c',
      },
    },
  };

  moduleInput: KitDefaultThemeParamsInput = {
    colors: {
      base: {
        background: '#fff',
        border: '#d6d6d6',
        text: '#373a3c',
      },
      hover: {
        background: '#fff',
        border: '#c0c0c0',
        text: '#373a3c',
      },
      focus: {
        background: '#fff',
        border: '#1f89ce',
        text: '#373a3c',
      },
      disabled: {
        background: '#e6e6e6',
        border: '#d6d6d6',
        text: '#c0c0c0',
      },
      readonly: {
        background: '#f4f4f4',
        border: '#e2e2e2',
        text: '#585858',
      },
    },
  };

  moduleLoadingBar: KitDefaultThemeParamsLoadingBar = {
    colors: {
      background: '#2399e5',
      shadow: '#1f89ce',
    },
  };

  moduleMenu: KitDefaultThemeParamsMenu = {
    titleFontSize: '.9rem',
    colors: {
      menu: {
        background: 'transparent',
        border: 'transparent',
        text: '#373a3c',
      },
      item: {
        base: {
          background: 'transparent',
          border: 'transparent',
          text: '#373a3c',
        },
        hover: {
          background: '#e6e6e6',
          border: 'transparent',
          text: '#373a3c',
        },
        disabled: {
          background: 'transparent',
          border: 'transparent',
          text: '#ccc',
        },
      },
      groupTitle: {
        background: 'transparent',
        text: '#949494',
      },
      separator: '#ccc',
      sub: {
        background: '#fff',
        border: '#ccc',
      },
      subItem: {
        base: {
          background: 'transparent',
          border: 'transparent',
          text: '#373a3c',
        },
        hover: {
          background: '#ccc',
          border: 'transparent',
          text: '#373a3c',
        },
        disabled: {
          background: 'transparent',
          border: 'transparent',
          text: '#cacaca',
        },
      },
    },
  };

  moduleModal: KitDefaultThemeParamsModal = {
    colors: {
      header: {
        background: '#B2DCF6',
        border: '#ccc',
        text: '#373a3c',
      },
      body: {
        background: '#fff',
        text: '#373a3c',
      },
      footer: {
        background: '#fff',
        border: '#ccc',
        text: '#373a3c',
      },
    },
  };

  moduleNotification: KitDefaultThemeParamsNotification = {
    colors: {
      'default': {
        background: '#373a3c',
        border: '#373a3c',
        titleText: '#ccc',
        messageText: '#fff',
      },
      primary: {
        background: '#2399e5',
        border: '#2399e5',
        titleText: '#373a3c',
        messageText: '#fff',
      },
      info: {
        background: '#5bc0de',
        border: '#5bc0de',
        titleText: '#373a3c',
        messageText: '#fff',
      },
      success: {
        background: '#5cb85c',
        border: '#5cb85c',
        titleText: '#373a3c',
        messageText: '#fff',
      },
      warning: {
        background: '#f0ad4e',
        border: '#f0ad4e',
        titleText: '#373a3c',
        messageText: '#fff',
      },
      error: {
        background: '#d9534f',
        border: '#d9534f',
        titleText: '#373a3c',
        messageText: '#fff',
      },
    },
  };

  moduleRadio: KitDefaultThemeParamsRadio = {
    colors: {
      nonChecked: {
        base: {
          background: '#fff',
          border: '#ccc',
        },
        hover: {
          background: '#fff',
          border: '#2399e5',
        },
        focus: {
          background: '#fff',
          border: '#2399e5',
        },
        disabled: {
          background: '#e6e6e6',
          border: '#ccc',
        },
      },
      checked: {
        base: {
          background: '#f4f4f4',
          border: '#0084ff',
          dot: '#0084ff',
        },
        hover: {
          background: '#f4f4f4',
          border: '#0084ff',
          dot: '#0084ff',
        },
        focus: {
          background: '#fff',
          border: '#0084ff',
          dot: '#0084ff',
        },
        disabled: {
          background: '#fff',
          border: '#cde4f2',
          dot: '#cde4f2',
        },
      },
    },
  };

  moduleSelect: KitDefaultThemeParamsSelect = {
    colors: {
      select: {
        base: {
          background: '#fff',
          border: '#d6d6d6',
          text: '#373a3c',
        },
        hover: {
          background: '#fff',
          border: '#c0c0c0',
          text: '#373a3c',
        },
        focus: {
          background: '#fff',
          border: '#1f89ce',
          text: '#373a3c',
        },
        disabled: {
          background: '#e6e6e6',
          border: '#d6d6d6',
          text: '#373a3c',
        },
      },
      option: {
        base: {
          background: '#fff',
          border: '#e6e6e6',
          text: '#373a3c',
        },
        hover: {
          background: '#f2f2f2',
          border: '#ccc',
          text: '#373a3c',
        },
        selected: {
          background: '#2399e5',
          border: '#0084ff',
          text: '#fff',
        },
        disabled: {
          background: '#f4f4f4',
          border: '#e2e2e2',
          text: '#585858',
        },
      },
      options: {
        background: '#fff',
        border: '#e6e6e6',
        text: '#373a3c',
      },
    },
  };

  moduleSpinner: KitDefaultThemeParamsSpinner = {
    duration: '1.5s',
    size: 50,
    type: 'spin-1',
    colors: {
      'default': '#2399e5',
    },
  };

  moduleTabs: KitDefaultThemeParamsTabs = {
    colors: {
      nav: {
        base: {
          background: '#fff',
          border: '#fff',
          text: '#373a3c',
        },
        hover: {
          background: '#f2f2f2',
          border: '#ccc',
          text: '#373a3c',
        },
        active: {
          background: '#e6e6e6',
          border: '#ccc',
          text: '#373a3c',
        },
      },
      panel: {
        background: '#fff',
        border: '#ccc',
        text: '#373a3c',
      },
    },
  };

  moduleTag: KitDefaultThemeParamsTag = {
    colors: {
      'default': {
        background: '#ccc',
        border: '#ccc',
        text: '#fff',
      },
      primary: {
        background: '#2399e5',
        border: '#2399e5',
        text: '#fff',
      },
      info: {
        background: '#5bc0de',
        border: '#5bc0de',
        text: '#fff',
      },
      success: {
        background: '#5cb85c',
        border: '#5cb85c',
        text: '#fff',
      },
      error: {
        background: '#d9534f',
        border: '#d9534f',
        text: '#fff',
      },
      warning: {
        background: '#f0ad4e',
        border: '#f0ad4e',
        text: '#fff',
      },
    },
  };

  moduleTextarea: KitDefaultThemeParamsTextarea = {
    colors: {
      base: {
        background: '#fff',
        border: '#d6d6d6',
        text: '#373a3c',
      },
      hover: {
        background: '#fff',
        border: '#c0c0c0',
        text: '#373a3c',
      },
      focus: {
        background: '#fff',
        border: '#1f89ce',
        text: '#373a3c',
      },
      disabled: {
        background: '#e6e6e6',
        border: '#d6d6d6',
        text: '#c0c0c0',
      },
      readonly: {
        background: '#fff',
        border: '#d6d6d6',
        text: '#373a3c',
      },
    },
  };

  moduleToggle: KitDefaultThemeParamsToggle = {
    colors: {
      base: {
        background: '#ccc',
        border: '#ccc',
        toggle: '#fff',
      },
      checked: {
        background: '#2399e5',
        border: '#2399e5',
        toggle: '#fff',
      },
    },
  };

  moduleTooltip: KitDefaultThemeParamsTooltip = {
    colors: {
      tooltip: {
        background: '#ccc',
        border: '#ccc',
        text: '#373a3c',
      },
    },
  };

  moduleTypo: KitDefaultThemeParamsTypo = {
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

  shadows: KitDefaultThemeParamsShadows = {
    element: '0 0 2px 0 rgba(50, 50, 50, 0.1)',
    deep: '0 0 20px 0 rgba(50, 50, 50, 0.1)',
    overlay: '0 0 6px 0 rgba(50, 50, 50, 0.1)',
  };

  transitions: KitDefaultThemeParamsTransitions = {
    'default': 'all .3s',
  };
}
