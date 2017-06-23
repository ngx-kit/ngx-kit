import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultInputStyle implements KitComponentStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  input(): StyleDef {
    const params = this.theme.params;
    return {
      border: [params.border.width, 'solid', params.colors.border.color],
      borderRadius: params.border.radius.s,
      boxSizing: 'border-box',
      transition: 'background 0.2s',
      width: '100%',
      padding: [params.grid.v / 2, params.grid.h / 2],
      $nest: {
        '&:focus': {},
      },
    };
  }

}
