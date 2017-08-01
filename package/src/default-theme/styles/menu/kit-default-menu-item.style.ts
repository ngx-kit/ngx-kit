import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

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
    const color = params.moduleMenu.colors.item;
    return {
      display: 'flex',
      alignItems: 'center',
      borderBottom: [2, 'solid', color.base.border],
      cursor: 'pointer',
      userSelect: 'none',
      padding: [params.grid.v / 2, params.grid.h],
      color: color.base.text,
      background: color.base.background,
      textDecoration: 'none',
      ...this.def.toggle(state.root, {
        // root items
        ...this.def.pick(state.menuDirection, {
          horizontal: {
            padding: [params.grid.v, params.grid.h * 2],
            ...this.def.toggle(state.hover, {
              background: color.hover.background,
              borderBottom: [2, 'solid', color.hover.border],
              color: color.hover.text,
            }),
          },
          vertical: {
            ...this.def.toggle(state.hover, {
              background: color.hover.background,
              color: color.hover.text,
            }),
          },
        }),
      }, {
        // sub items
        ...this.def.toggle(state.hover, {}),
        ...this.def.toggle(state.hasSubs, {}),
      }),
      ...this.def.toggle(state.disabled, {
        background: color.hover.background,
        color: color.hover.text,
      }),
    };
  }
}
