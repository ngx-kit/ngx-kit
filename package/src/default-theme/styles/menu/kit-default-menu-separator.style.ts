import { Inject, Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuSeparatorStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {parentDirection: 'vertical' | 'horizontal'}): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.menus;
    return {
      borderColor: colors.separator,
      ...defPick(state.parentDirection, {
        vertical: {
          margin: [this.theme.params.grid.h / 2, 0],
        },
        horizontal: {
          margin: [0, this.theme.params.grid.h / 2],
        },
      }, 'vertical'),
    };
  }
}
