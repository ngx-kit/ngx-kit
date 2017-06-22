import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { RegistrationDef, StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultDropdownMenuItemStyle implements KitComponentStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): RegistrationDef {
    const params = this.theme.params;
    return {
      host: {
        cursor: 'pointer',
        display: 'block',
        padding: [params.grid.v /1.5, params.grid.h * 1.5],
        $nest: {
          '&:hover': {
            background: '#f0f0f0',
          },
        },
        $states: {
          active: {
            background: '#f0f0f0',
          },
        },
      },
    };
  }

}
