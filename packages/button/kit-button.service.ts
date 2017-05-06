import { Injectable } from '@angular/core';
import { KitComponentService, KitCoreService, KitThemeProps } from '@ngx-kit/core';

import { KitButtonTheme } from './interfaces';

@Injectable()
export class KitButtonService extends KitComponentService<KitButtonTheme> {

  private themeProps: KitThemeProps;

  constructor(private kitCore: KitCoreService) {
    super();
    this.themeProps = this.kitCore.getThemeProps();
    this.compileTheme();
    this.modify(this.kitCore.getComponentModifiers<KitButtonTheme>('button'));
  }

  private compileTheme() {
    this.theme = {
      host: {
        base: {
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
          boxShadow: '0 0 2px 0 rgba(50, 50, 50, 0.1)',
        },
        size: {
          xs: {
            padding: '1px 4px',
            fontSize: '.8rem',
          },
          s: {
            padding: '2px 8px',
            fontSize: '1rem',
          },
          m: {
            padding: '6px 12px',
            fontSize: '1.1rem',
          },
          l: {
            padding: '8px 20px',
            fontSize: '1.3rem',
          },
          xl: {
            padding: '16px 32px',
            fontSize: '1.6rem',
          },
        },
        swatchMap: {
          background: 'color',
          color: 'text',
        },
        type: {
          primary: {},
          success: {},
          info: {},
          warning: {},
          error: {},
          link: {
            boxShadow: 'none'
          }
        },
        disabled: {
          cursor: 'default',
        },
      }
    };
  }

}
