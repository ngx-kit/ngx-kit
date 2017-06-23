import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultAutoCompleteStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  input(): StyleDef {
    return {
      display: 'block',
    };
  };

  results(): StyleDef {
    return {
      background: this.theme.params.colors.body.color,
      boxShadow: this.theme.params.shadows.deep,
    };
  }

  result(state: {active: boolean}): StyleDef {
    return {
      borderBottom: '1px solid #eee',
      cursor: 'pointer',
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
