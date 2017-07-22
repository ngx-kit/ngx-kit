import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../core/meta/component';
import { kitTheme } from '../../core/meta/tokens';
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

  results(): StyleDef {
    return {
      background: this.theme.params.colors.body.color,
      boxShadow: this.theme.params.shadows.deep,
    };
  }
}
