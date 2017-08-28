import { Inject, Injectable } from '@angular/core';
import { opacify, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuGroupTitleStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    inverted: boolean;
  }): StyleDef {
    const params = this.theme.params;
    return {
      fontSize: '.9rem',
      padding: [0, params.grid.h, params.grid.v / 2],
      color: opacify(-.4, state.inverted ? params.colors.background : params.colors.invert),
      textTransform: 'uppercase',
      fontWeight: 'bold',
    };
  }
}
