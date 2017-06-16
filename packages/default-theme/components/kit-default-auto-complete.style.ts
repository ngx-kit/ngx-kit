import { Inject, Injectable } from '@angular/core';

import {
  KitAutoCompleteStyle, KitAutoCompleteStyleDef, kitTheme
} from '@ngx-kit/core';
import { StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultAutoCompleteStyle implements KitAutoCompleteStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): KitAutoCompleteStyleDef {
    const params = this.theme.params;
    return {
      host: {},
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
