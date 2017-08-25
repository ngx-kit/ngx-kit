import { Inject, Injectable } from '@angular/core';
import { defToggle, mix, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultDropdownMenuItemStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {active: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      padding: [params.grid.v / 1.5, params.grid.h * 1.5],
      $nest: {
        '&:hover': {
          background: mix(.95, params.colors.background, params.colors.invert),
          color: params.colors.invert,
        },
      },
      ...defToggle(state.active, {
        background: params.colors.swatches.primary.base,
        color: params.colors.swatches.primary.invert,
      }),
    };
  }
}
