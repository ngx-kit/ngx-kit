import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuItemStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    disabled: boolean,
    menuDirection: 'horizontal' | 'vertical',
    hover: boolean,
    root: boolean,
    hasSubs: boolean,
  }): StyleDef {
    const params = this.theme.params;
    return {
      display: 'block',
      borderBottom: [2, 'solid', 'transparent'],
      cursor: 'pointer',
      userSelect: 'none',
      padding: [params.grid.v, params.grid.h * 3],
      ...this.def.toggle(state.root, {
        ...this.def.pick(state.menuDirection, {
          horizontal: {
            ...this.def.toggle(state.hover, {
              borderBottom: [2, 'solid', this.theme.colorMod(.05, params.colors.brand.color)],
              color: this.theme.colorMod(.05, params.colors.brand.color),
            }),
          },
          vertical: {
            ...this.def.toggle(state.hover, {
              color: this.theme.colorMod(.05, params.colors.brand.color),
            }),
          },
        }),
      }, {
        ...this.def.toggle(state.hover, {
         color: this.theme.colorMod(.05, params.colors.brand.color),
        }),
        ...this.def.toggle(state.hasSubs, {}),
      }),
      ...this.def.toggle(state.disabled, {
        color: '#888888',
      }),
    };
  }

}
