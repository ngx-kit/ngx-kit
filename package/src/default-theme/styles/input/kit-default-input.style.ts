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
    return {
      borderRadius: params.borders.radius,
      boxSizing: 'border-box',
      transition: 'background 0.2s',
      width: '100%',
      padding: [params.grid.v / 2, params.grid.h],
      ...defToggle(state.disabled, {
        ...applyColorSet(params.moduleInput.colors.disabled, params.borders.width),
      }, {
        ...applyColorSet(params.moduleInput.colors.base, params.borders.width),
        $nest: {
          '&:hover': {
            outline: 'none',
            ...applyColorSet(params.moduleInput.colors.hover, params.borders.width),
          },
          '&:focus': {
            transition: '0.2s',
            outline: 'none',
            ...applyColorSet(params.moduleInput.colors.focus, params.borders.width),
          },
        },
        ...defToggle(state.readonly, {
          ...applyColorSet(params.moduleInput.colors.readonly, params.borders.width),
        }),
      }),
    };
  }
}
