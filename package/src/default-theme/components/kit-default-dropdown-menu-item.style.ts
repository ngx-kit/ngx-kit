import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../core/meta/component';
import { kitTheme } from '../../core/meta/tokens';
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
      padding: [params.grid.v / 1.5, params.grid.h * 1.5],
      $nest: {
        '&:hover': {
          background: '#f0f0f0',
        },
      },
      ...this.def.toggle(state.active, {
        background: '#f0f0f0',
      }),
    };
  }
}
