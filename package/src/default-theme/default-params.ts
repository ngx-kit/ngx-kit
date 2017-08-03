import {
  KitDefaultThemeParams,
  KitDefaultThemeParamsAccordion,
  KitDefaultThemeParamsAlert,
  KitDefaultThemeParamsAutoComplete,
  KitDefaultThemeParamsBadge,
  KitDefaultThemeParamsButton,
  KitDefaultThemeParamsCheckbox,
  KitDefaultThemeParamsDropdownMenu,
  KitDefaultThemeParamsForm,
  KitDefaultThemeParamsInput,
  KitDefaultThemeParamsLoadingBar,
  KitDefaultThemeParamsMenu,
  KitDefaultThemeParamsRadio,
  KitDefaultThemeParamsSelect,
  KitDefaultThemeParamsSpinner,
  KitDefaultThemeParamsTag,
  KitDefaultThemeParamsTextarea,
  KitDefaultThemeParamsToggle,
  KitDefaultThemeParamsTypo,
} from './meta';

export class KitDefaultThemeDefaultParams implements KitDefaultThemeParams {
  get borders() {
    return {
      radius: {
        s: 2,
        m: 6,
        l: 12,
      },
      width: 1,
    }
  }

  get colors() {
    return {
      white: '#fff',
      lightBlue1: '#92ccff',
      blue1: '#0084ff',
      blue2: '#0071e2',
      blue3: '#0066cb',
      lightGreen1: '#a5e396',
      green1: '#2dc100',
      green2: '#2bab00',
      green3: '#259100',
      lightOrange1: '#fff198',
      orange1: '#ffb62f',
      orange2: '#e0a527',
      orange3: '#d69714',
      lightRed1: '#ffcdca',
      red1: '#ff5500',
      red2: '#e14c00',
      red3: '#cb4000',
      lightGrey1: '#fafafa',
      lightGrey2: '#f4f4f4',
      lightGrey3: '#efefef',
      grey1: '#e2e2e2',
      grey2: '#dadada',
      grey3: '#cacaca',
      grey4: '#b0b0b0',
      grey5: '#8c8c8c',
      grey6: '#707070',
      grey7: '#585858',
      grey8: '#404040',
    };
  }

  get grid() {
    return {
      h: 8,
      v: 8,
    };
  }

  get moduleAccordion(): KitDefaultThemeParamsAccordion {
    return {
      colors: {
        border: this.colors.grey1,
        title: {
          background: this.colors.lightGrey3,
          text: this.colors.grey8,
        },
        content: {
          background: this.colors.lightGrey1,
          text: this.colors.grey8,
        },
      },
    };
  }

  get moduleAlert(): KitDefaultThemeParamsAlert {
    return {
      titleFontSize: '1.2em',
      colors: {
        info: {
          background: this.colors.lightBlue1,
          border: this.colors.blue1,
          text: `rgba(0,0,0,.7)`,
          closeText: this.colors.blue2,
          titleText: `rgba(0,0,0,.9)`,
        },
        success: {
          background: this.colors.lightGreen1,
          border: this.colors.green1,
          text: `rgba(0,0,0,.7)`,
          closeText: this.colors.green2,
          titleText: `rgba(0,0,0,.9)`,
        },
        warning: {
          background: this.colors.lightOrange1,
          border: this.colors.orange1,
          text: `rgba(0,0,0,.7)`,
          closeText: this.colors.orange2,
          titleText: `rgba(0,0,0,.9)`,
        },
        error: {
          background: this.colors.lightRed1,
          border: this.colors.red1,
          text: `rgba(0,0,0,.7)`,
          closeText: this.colors.red2,
          titleText: `rgba(0,0,0,.9)`,
        },
      },
    };
  }

  get moduleAutoComplete(): KitDefaultThemeParamsAutoComplete {
    return {
      colors: {
        resultItem: {
          base: {
            background: this.colors.blue1,
            border: this.colors.blue1,
            text: this.colors.white,
          },
          hover: {
            background: this.colors.blue1,
            border: this.colors.blue1,
            text: this.colors.white,
          },
          active: {
            background: this.colors.blue1,
            border: this.colors.blue1,
            text: this.colors.white,
          },
        },
      },
    };
  }

  get moduleBadge(): KitDefaultThemeParamsBadge {
    return {
      colors: {
        'default': {
          background: this.colors.blue1,
          border: this.colors.blue1,
          text: this.colors.white,
        },
        primary: {
          background: this.colors.blue1,
          border: this.colors.blue1,
          text: this.colors.white,
        },
        success: {
          background: this.colors.blue1,
          border: this.colors.blue1,
          text: this.colors.white,
        },
        warning: {
          background: this.colors.blue1,
          border: this.colors.blue1,
          text: this.colors.white,
        },
        error: {
          background: this.colors.blue1,
          border: this.colors.blue1,
          text: this.colors.white,
        },
      },
    };
  }

  get moduleButton(): KitDefaultThemeParamsButton {
    const disabled = {
      background: this.colors.grey5,
      border: this.colors.grey5,
      text: this.colors.grey6,
    };
    return {
      colors: {
        'default': {
          base: {
            background: this.colors.grey2,
            border: this.colors.grey2,
            text: this.colors.grey8,
          },
          hover: {
            background: this.colors.grey3,
            border: this.colors.grey3,
            text: this.colors.grey8,
          },
          active: {
            background: this.colors.grey4,
            border: this.colors.grey3,
            text: this.colors.grey8,
          },
          disabled,
        },
        primary: {
          base: {
            background: this.colors.blue1,
            border: this.colors.blue1,
            text: this.colors.white,
          },
          hover: {
            background: this.colors.blue2,
            border: this.colors.blue2,
            text: this.colors.white,
          },
          active: {
            background: this.colors.blue3,
            border: this.colors.blue3,
            text: this.colors.white,
          },
          disabled,
        },
        success: {
          base: {
            background: this.colors.green1,
            border: this.colors.green1,
            text: this.colors.white,
          },
          hover: {
            background: this.colors.green2,
            border: this.colors.green2,
            text: this.colors.white,
          },
          active: {
            background: this.colors.green3,
            border: this.colors.green3,
            text: this.colors.white,
          },
          disabled,
        },
        warning: {
          base: {
            background: this.colors.blue1,
            border: this.colors.blue1,
            text: this.colors.white,
          },
          hover: {
            background: this.colors.blue2,
            border: this.colors.blue2,
            text: this.colors.white,
          },
          active: {
            background: this.colors.blue3,
            border: this.colors.blue3,
            text: this.colors.white,
          },
          disabled,
        },
        error: {
          base: {
            background: this.colors.blue1,
            border: this.colors.blue1,
            text: this.colors.white,
          },
          hover: {
            background: this.colors.blue2,
            border: this.colors.blue2,
            text: this.colors.white,
          },
          active: {
            background: this.colors.blue3,
            border: this.colors.blue3,
            text: this.colors.white,
          },
          disabled,
        },
      },
    };
  }

  get moduleCheckbox(): KitDefaultThemeParamsCheckbox {
    return {
      colors: {
        base: {
          background: this.colors.lightGrey2,
          border: this.colors.grey1,
        },
        checked: {
          background: this.colors.lightGrey2,
          border: this.colors.blue1,
          check: this.colors.blue1,
        },
      },
    };
  }

  get moduleDatePicker() {
    return {};
  }

  get moduleDropdownMenu(): KitDefaultThemeParamsDropdownMenu {
    return {
      colors: {
        menu: {
          border: this.colors.grey1,
          background: this.colors.lightGrey1,
        },
      },
    };
  }

  get moduleForm(): KitDefaultThemeParamsForm {
    return {
      colors: {
        error: {
          border: this.colors.red1,
          text: this.colors.red1,
        },
      },
    };
  }

  get moduleInput(): KitDefaultThemeParamsInput {
    return {
      colors: {
        base: {
          background: this.colors.lightGrey2,
          border: this.colors.grey1,
          text: this.colors.grey7,
        },
        hover: {
          background: this.colors.lightGrey2,
          border: this.colors.grey3,
          text: this.colors.grey7,
        },
        focus: {
          background: this.colors.lightGrey2,
          border: this.colors.blue1,
          text: this.colors.grey8,
        },
      },
    };
  }

  get moduleLoadingBar(): KitDefaultThemeParamsLoadingBar {
    return {
      colors: {
        background: this.colors.blue3,
        shadow: this.colors.blue1,
      },
    };
  }

  get moduleMenu(): KitDefaultThemeParamsMenu {
    return {
      titleFontSize: '.9rem',
      colors: {
        item: {
          base: {
            background: 'transparent',
            border: 'transparent',
            text: this.colors.grey6,
          },
          hover: {
            background: 'transparent',
            border: this.colors.grey3,
            text: this.colors.grey6,
          },
          disabled: {
            background: 'transparent',
            border: 'transparent',
            text: this.colors.grey3,
          },
        },
        separator: this.colors.grey1,
      },
    };
  }

  get moduleRadio(): KitDefaultThemeParamsRadio {
    return {
      colors: {
        base: {
          background: this.colors.lightGrey2,
          border: this.colors.grey1,
        },
        hover: {
          background: this.colors.lightGrey2,
          border: this.colors.grey3,
        },
        checked: {
          background: this.colors.lightGrey2,
          border: this.colors.blue1,
          dot: this.colors.blue1,
        },
      },
    };
  }

  get moduleSelect(): KitDefaultThemeParamsSelect {
    return {
      colors: {
        base: {
          background: this.colors.lightGrey3,
          border: this.colors.grey2,
          text: this.colors.grey7,
        },
        hover: {
          background: this.colors.grey1,
          border: this.colors.grey3,
          text: this.colors.grey7,
        },
        selected: {
          background: this.colors.grey2,
          border: this.colors.grey4,
          text: this.colors.grey8,
        },
      },
    };
  }

  get moduleSpinner(): KitDefaultThemeParamsSpinner {
    return {
      duration: '1.5s',
      size: 50,
      type: 'spin-1',
      defaultColor: this.colors.blue1,
    };
  }

  get moduleTag(): KitDefaultThemeParamsTag {
    return {
      colors: {
        'default': {
          background: this.colors.grey2,
          border: this.colors.grey2,
          text: this.colors.grey8,
        },
        primary: {
          background: this.colors.blue1,
          border: this.colors.blue1,
          text: this.colors.white,
        },
        success: {
          background: this.colors.grey2,
          border: this.colors.grey2,
          text: this.colors.grey8,
        },
        error: {
          background: this.colors.grey2,
          border: this.colors.grey2,
          text: this.colors.grey8,
        },
        warning: {
          background: this.colors.grey2,
          border: this.colors.grey2,
          text: this.colors.grey8,
        },
      },
    };
  }

  get moduleTextarea(): KitDefaultThemeParamsTextarea {
    return {
      colors: {
        base: {
          background: this.colors.lightGrey2,
          border: this.colors.grey1,
          text: this.colors.grey7,
        },
        hover: {
          background: this.colors.lightGrey2,
          border: this.colors.grey3,
          text: this.colors.grey7,
        },
        focus: {
          background: this.colors.lightGrey2,
          border: this.colors.blue1,
          text: this.colors.grey8,
        },
      },
    };
  }

  get moduleToggle(): KitDefaultThemeParamsToggle {
    return {
      colors: {
        base: {
          background: this.colors.lightGrey2,
          border: this.colors.grey1,
          toggle: this.colors.white,
        },
        checked: {
          background: this.colors.blue1,
          border: this.colors.blue2,
          toggle: this.colors.white,
        },
      },
    };
  }

  get moduleTypo(): KitDefaultThemeParamsTypo {
    return {
      fontSize: '13px',
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
          text: this.colors.grey8,
        },
        link: {
          base: {
            background: 'transparent',
            text: this.colors.blue1,
          },
          hover: {
            background: 'transparent',
            text: this.colors.blue2,
          },
          focus: {
            background: 'transparent',
            text: this.colors.blue2,
          },
          visited: {
            background: 'transparent',
            text: this.colors.blue2,
          },
        },
      },
    };
  }

  get shadows() {
    return {
      element: '0 0 2px 0 rgba(50, 50, 50, 0.1)',
      deep: '0 0 20px 0 rgba(50, 50, 50, 0.1)',
      overlay: '0 0 6px 0 rgba(50, 50, 50, 0.1)',
    };
  }

  get transitions() {
    return {
      'default': 'all .3s',
    };
  }
}
