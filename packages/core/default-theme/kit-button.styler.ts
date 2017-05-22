import { StylerService } from '@ngx-kit/styler';

import { KitDefaultThemeParams } from './interfaces';

export class KitButtonStyler {

  static style(styler: StylerService, params: KitDefaultThemeParams) {
    // Base
    styler.register({
      host: {
        position: 'relative',
        display: 'inline-block',
        boxSizing: 'border-box',
        textDecoration: 'none',
        marginBottom: 0,
        fontWeight: 400,
        textAlign: 'center',
        verticalAlign: 'middle',
        cursor: 'pointer',
        backgroundImage: 'none',
        border: '1px solid transparent',
        whiteSpace: 'nowrap',
        lineHeight: 1.42857,
        borderRadius: '3px',
        userSelect: 'none',
        boxShadow: params.shadows.element,
      }
    });

    // Size state
    styler.registerState('size', {
      xs: {
        host: {
          padding: `${params.grid.h / 8}px ${params.grid.v / 2}px`,
          fontSize: '.8rem',
        },
      },
      s: {
        host: {
          padding: `${params.grid.h / 4}px ${params.grid.v}px`,
          fontSize: '1rem',
        },
      },
      m: {
        host: {
          padding: `${params.grid.h / 2}px ${params.grid.v * 1.5}px`,
          fontSize: '1.1rem',
        },
      },
      l: {
        host: {
          padding: `${params.grid.h}px ${params.grid.v * 2.5}px`,
          fontSize: '1.3rem',
        },
      },
      xl: {
        host: {
          padding: `${params.grid.h * 2}px ${params.grid.v * 4}px`,
          fontSize: '1.6rem',
        },
      }
    }, 'm');

    // Type state
    styler.registerState('type', {
      'default': {
        host: {
          background: params.colors.button.color,
          color: params.colors.button.text,
          borderColor: params.colors.border.color,
        },
      },
      primary: {
        host: {
          background: params.colors.brand.color,
          borderColor: params.colors.brand.color,
          color: params.colors.brand.text,
        }
      },
      success: {
        host: {
          background: params.colors.success.color,
          borderColor: params.colors.success.color,
          color: params.colors.success.text,
        }
      },
      warning: {
        host: {
          background: params.colors.success.color,
          borderColor: params.colors.success.color,
          color: params.colors.success.text,
        }
      },
      error: {
        host: {
          background: params.colors.success.color,
          borderColor: params.colors.success.color,
          color: params.colors.success.text,
        }
      },
      link: {
        host: {
          boxShadow: 'none',
          paddingLeft: 0,
          paddingRight: 0,
          background: params.colors.link.color,
          borderColor: 'transparent',
          color: params.colors.link.text,
        }
      },
    }, 'default');

    // Disabled state
    styler.registerState('disabled', {
      disabled: {
        host: {
          cursor: 'default',
          background: params.colors.border.color,
          borderColor: params.colors.border.color,
          color: params.colors.border.text,
        },
      },
    });
  }

}