import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet, BORDER_BOTTOM } from '../../utils/apply-color-set';
import { genMenuItemHover } from '../../utils/menus';

@Injectable()
export class KitDefaultAutoCompleteStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  input(): StyleDef {
    return {};
  };

  result(state: {active: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      padding: `${this.theme.params.grid.v / 4}px ${this.theme.params.grid.h}px`,
      borderBottom: [params.borders.width, 'solid', 'transparent'],
      $nest: {
        '&:first-child': {
          borderTopLeftRadius: params.borders.radius,
          borderTopRightRadius: params.borders.radius,
        },
        '&:last-child': {
          borderBottomLeftRadius: params.borders.radius,
          borderBottomRightRadius: params.borders.radius,
          borderBottomWidth: 0,
        },
      },
      ...defToggle(state.active, {
        ...applyColorSet({
          background: params.colors.swatches.primary.base,
          border: params.colors.swatches.primary.base,
          text: params.colors.swatches.primary.invert,
        }, params.borders.width, BORDER_BOTTOM),
      }, {
        $nest: {
          '&:hover': {
            ...applyColorSet(genMenuItemHover(params.colors), params.borders.width, BORDER_BOTTOM),
          },
        },
      }),
    };
  }

  results(): StyleDef {
    const params = this.theme.params;
    return {
      background: params.colors.background,
      border: [params.borders.width, 'solid', params.colors.swatches.primary.base],
      color: params.colors.invert,
      boxShadow: this.theme.params.shadows.deep,
      borderRadius: params.borders.radius,
    };
  }
}
