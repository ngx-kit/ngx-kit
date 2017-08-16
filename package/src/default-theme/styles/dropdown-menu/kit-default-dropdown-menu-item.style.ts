import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';

@Injectable()
export class KitDefaultDropdownMenuItemStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {active: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      cursor: 'pointer',
      display: 'block',
      padding: [params.grid.v / 1.5, params.grid.h * 1.5],
      borderBottom: [params.borders.width, 'solid', params.moduleDropdownMenu.colors.item.base.border],
      ...applyTypoColorSet(params.moduleDropdownMenu.colors.item.base),
      $nest: {
        '&:hover': {
          borderBottom: [params.borders.width, 'solid', params.moduleDropdownMenu.colors.item.hover.border],
          ...applyTypoColorSet(params.moduleDropdownMenu.colors.item.hover),
        },
      },
      ...defToggle(state.active, {
        borderBottom: [params.borders.width, 'solid', params.moduleDropdownMenu.colors.item.hover.border],
        ...applyTypoColorSet(params.moduleDropdownMenu.colors.item.hover),
      }),
    };
  }
}
