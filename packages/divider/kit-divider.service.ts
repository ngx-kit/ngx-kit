import { Injectable } from '@angular/core';
import { KitComponentService, KitCoreService, KitThemeProps } from '@ngx-kit/core';

import { KitDividerTheme } from './interfaces';

@Injectable()
export class KitDividerService extends KitComponentService<KitDividerTheme> {

  private themeProps: KitThemeProps;

  constructor(private kitCore: KitCoreService) {
    super();
  }

  private compileTheme() {
    this.theme = {
      host: {
        base: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '16px 0',
        },
      },
      line: {
        base: {
          flexGrow: 1,
          borderTop: '1px solid rgba(34,36,38,.15)',
          borderBottom: '1px solid rgba(255,255,255,.1)',
        }
      },
      text: {
        base: {
          $nest: {
            '&:not(:empty)': {
              padding: '0 16px',
            },
          },
        },
      },
    };
  }

}
