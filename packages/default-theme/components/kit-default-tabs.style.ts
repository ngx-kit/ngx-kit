import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultTabsStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  nav(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    };
  }

  tab(state: {active: boolean}): StyleDef {
    return {
      cursor: 'pointer',
      padding: '8px',
      ...this.def.toggle(state.active, {
        fontWeight: 600,
      }),
    }
  }

}
