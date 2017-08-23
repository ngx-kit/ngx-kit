import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet, BORDER_BOTTOM } from '../../utils/apply-color-set';

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
    const colors = params.colors.inputs.options;
    return {
      padding: `${this.theme.params.grid.v / 4}px ${this.theme.params.grid.h}px`,
      ...applyColorSet(colors.base, params.borders.width, BORDER_BOTTOM),
      $nest: {
        '&:hover': {
          ...applyColorSet(colors.hover, params.borders.width, BORDER_BOTTOM),
        },
        '&:first-child': {
          borderTopLeftRadius: params.borders.radius,
          borderTopRightRadius: params.borders.radius,
        },
        '&:last-child': {
          borderBottomLeftRadius: params.borders.radius,
          borderBottomRightRadius: params.borders.radius,
        },
      },
      ...defToggle(state.active, {
        ...applyColorSet(colors.selected, params.borders.width, BORDER_BOTTOM),
      }),
    };
  }

  results(): StyleDef {
    const params = this.theme.params;
    return {
      boxShadow: this.theme.params.shadows.deep,
      borderRadius: params.borders.radius,
    };
  }
}
