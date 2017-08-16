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
    return {
      backgroundColor: params.moduleMenu.colors.sub.background,
      border: [params.borders.width, 'solid', params.moduleMenu.colors.sub.border],
      display: 'block',
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
