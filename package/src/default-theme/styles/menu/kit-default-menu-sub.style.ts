import { Inject, Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuSubStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  menu(state: {position: 'bottom' | 'right'}): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.menus;
    return {
      backgroundColor: colors.sub.background,
      border: [params.borders.width, 'solid', colors.sub.border],
      borderRadius: params.borders.radius,
      ...defPick(state.position, {
        right: {
          marginLeft: this.theme.params.grid.h / 2,
        },
        bottom: {
          marginTop: this.theme.params.grid.v / 2,
        },
      }),
    };
  }
}
