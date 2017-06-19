import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { RegistrationDef, StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultDividerStyle implements KitComponentStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): RegistrationDef {
    const params = this.theme.params;
    return {
      host: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '16px 0',
      },
      line: {
        flexGrow: 1,
        borderTop: '1px solid rgba(34,36,38,.15)',
        borderBottom: '1px solid rgba(255,255,255,.1)',
      },
      text: {
        padding: '0 16px',
        $nest: {
          '&:empty': {
            display: 'none',
          },
        },
      },
    };
  }

}
