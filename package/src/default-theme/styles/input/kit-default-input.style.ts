import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultInputStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  input(state: {
    disabled: boolean;
    readonly: boolean;
  }): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.inputs;
    return {
      borderRadius: params.borders.radius,
      transition: 'background 0.2s',
      padding: [params.grid.v / 2, params.grid.h],
      ...defToggle(state.disabled, {
        ...applyColorSet(colors.disabled, params.borders.width),
      }, {
        ...applyColorSet(colors.base, params.borders.width),
        $nest: {
          '&:hover': {
            outline: 'none',
            ...applyColorSet(colors.hover, params.borders.width),
          },
          '&:focus': {
            transition: '0.2s',
            outline: 'none',
            ...applyColorSet(colors.focus, params.borders.width),
          },
        },
        ...defToggle(state.readonly, {
          ...applyColorSet(colors.readonly, params.borders.width),
        }),
      }),
    };
  }
}
