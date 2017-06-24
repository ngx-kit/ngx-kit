import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {direction: 'horizontal' | 'vertical'}): StyleDef {
    return {
      borderBottom: [1, 'solid', '#e9e9e9'],
      display: 'flex',
      justifyContent: 'flex-start',
      ...this.def.pick(state.direction, {
        horizontal: {
          flexDirection: 'row',
        },
        vertical: {
          flexDirection: 'column',
        },
      }, 'horizontal'),
    };
  }

}
