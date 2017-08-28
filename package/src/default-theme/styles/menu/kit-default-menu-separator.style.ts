import { Inject, Injectable } from '@angular/core';
import { defPick, opacify, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitMenuDirection } from '../../../menu/meta';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuSeparatorStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    parentDirection: KitMenuDirection;
    inverted: boolean;
  }): StyleDef {
    const params = this.theme.params;
    return {
      borderColor: opacify(-.8, state.inverted ? params.colors.background : params.colors.invert),
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
