import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { RegistrationDef, StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultAutoCompleteStyle implements KitComponentStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): RegistrationDef {
    const params = this.theme.params;
    return {
      host: {},
      input: {
        display: 'block',
      },
      results: {
        background: params.colors.body.color,
        boxShadow: params.shadows.deep,
      },
      result: {
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
        $nest: {
          '&:hover': {
            background: '#ddd',
          },
        },
        $states: {
          active: {
            background: '#ddd',
          },
        },
      },
    };
  }

}
