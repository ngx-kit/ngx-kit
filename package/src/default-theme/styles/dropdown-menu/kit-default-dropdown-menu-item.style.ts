import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet, BORDER_BOTTOM } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultDropdownMenuItemStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {active: boolean}): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.menus;
    return {
      padding: [params.grid.v / 1.5, params.grid.h * 1.5],
      ...applyColorSet(colors.subItem.base, params.borders.width, BORDER_BOTTOM),
      $nest: {
        '&:hover': {
          ...applyColorSet(colors.subItem.hover, params.borders.width, BORDER_BOTTOM),
        },
      },
      ...defToggle(state.active, {
        ...applyColorSet(colors.subItem.active, params.borders.width, BORDER_BOTTOM),
      }),
    };
  }
}
