import {
  KitDefaultThemeParams,
  KitDefaultThemeParamsAlert,
  KitDefaultThemeParamsBorders,
  KitDefaultThemeParamsColorPicker,
  KitDefaultThemeParamsColors,
  KitDefaultThemeParamsDatePicker,
  KitDefaultThemeParamsGrid,
  KitDefaultThemeParamsMenu,
  KitDefaultThemeParamsShadows,
  KitDefaultThemeParamsSpinner,
  KitDefaultThemeParamsTransitions,
  KitDefaultThemeParamsTypo,
} from './meta/params';

export class KitDefaultThemeDefaultParams implements KitDefaultThemeParams {
  borders: KitDefaultThemeParamsBorders = {
    radius: 2,
    width: 1,
  };

  colors: KitDefaultThemeParamsColors = {
    inputs: {
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
      checked: {
        background: '#fff',
        border: '#2399e5',
        text: '#373a3c',
      },
      options: {
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
    },
    loaders: {
      base: '#1f89ce',
      shadow: '#1f95de',
    },
    menus: {
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
        active: {
          background: '#2399e5',
          border: 'transparent',
          text: '#fff',
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
        active: {
          background: '#2399e5',
          border: 'transparent',
          text: '#fff',
        },
        disabled: {
          background: 'transparent',
          border: 'transparent',
          text: '#cacaca',
        },
      },
    },
    modals: {
      modal: {
        background: '#fff',
        border: '#ccc',
        text: '#373a3c',
      },
    },
    panels: {
      border: '#ccc',
      content: {
        background: '#fff',
        text: '#373a3c',
      },
      title: {
        base: {
          background: '#f2f2f2',
          text: '#373a3c',
        },
        hover: {
          background: '#e7e7e7',
          text: '#373a3c',
        },
        active: {
          background: '#dbdbdb',
          text: '#373a3c',
        },
      },
    },
    swatches: {
      'default': {
        base: '#ccc',
        baseText: '#404040',
        hover: '#bebebe',
        active: '#b0b0b0',
        light: '#eeeeee',
        lightText: '#5c5c5c',
        disabledText: '#cbcbcb',
        overlay: 'rgba(0,0,0,.8)',
        overlayText: '#fff',
      },
      'primary': {
        base: '#2399e5',
        baseText: '#fff',
        hover: '#1f89ce',
        active: '#186ba0',
        light: '#B2DCF6',
        lightText: '#1f89ce',
        disabledText: '#9abad4',
        overlay: '#186ba0',
        overlayText: '#fff',
      },
      'info': {
        base: '#5bc0de',
        baseText: '#fff',
        hover: '#46b8da',
        active: '#31b0d5',
        light: '#cde4f2',
        lightText: '#44b0d1',
        disabledText: '#cbcbcb',
        overlay: '#31b0d5',
        overlayText: '#fff',
      },
      'success': {
        base: '#5cb85c',
        baseText: '#fff',
        hover: '#4cae4c',
        active: '#449d44',
        light: '#b2e3b2',
        lightText: '#469a46',
        disabledText: '#cbcbcb',
        overlay: '#449d44',
        overlayText: '#fff',
      },
      'warning': {
        base: '#f0ad4e',
        baseText: '#fff',
        hover: '#eea236',
        active: '#ec971f',
        light: '#ffdcab',
        lightText: '#d18e35',
        disabledText: '#cbcbcb',
        overlay: '#ec971f',
        overlayText: '#fff',
      },
      'error': {
        base: '#d9534f',
        baseText: '#fff',
        hover: '#d43f3a',
        active: '#c9302c',
        light: '#f5918e',
        lightText: '#cf3e39',
        disabledText: '#cbcbcb',
        overlay: '#c9302c',
        overlayText: '#fff',
      },
    },
    typo: {
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

  grid: KitDefaultThemeParamsGrid = {
    h: 8,
    v: 8,
  };

  moduleAlert: KitDefaultThemeParamsAlert = {
    titleFontSize: '1.2em',
  };

  moduleColorPicker: KitDefaultThemeParamsColorPicker = {
    cursorSize: 10,
    sliderHeight: 16,
  };

  moduleDatePicker: KitDefaultThemeParamsDatePicker = {
    dateCellPadding: 2,
    datePadding: 4,
  };

  moduleMenu: KitDefaultThemeParamsMenu = {
    titleFontSize: '.9rem',
  };

  moduleSpinner: KitDefaultThemeParamsSpinner = {
    duration: '1.5s',
    size: 50,
    type: 'spin-1',
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
