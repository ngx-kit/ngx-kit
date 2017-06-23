import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultLayoutStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {hasSide: boolean}): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'column',
      ...this.def.toggle(state.hasSide, {
        flexDirection: 'row',
      }),
    };
  }

}
