import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultDropdownMenuItemStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {active: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      borderBottom: '1px solid #eee',
      cursor: 'pointer',
      display: 'block',
      padding: [params.grid.v / 2, params.grid.h],
      $nest: {
        '&:hover': {
          background: '#ddd',
        },
      },
      ...this.def.toggle(state.active, {
        background: '#ddd',
      }),
    };
  }

}
