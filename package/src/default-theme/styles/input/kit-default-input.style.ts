import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
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

  input(): StyleDef {
    const params = this.theme.params;
    return {
      borderRadius: params.borders.radius.s,
      boxSizing: 'border-box',
      transition: 'background 0.2s',
      width: '100%',
      padding: [params.grid.v / 2, params.grid.h],
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
    };
  }
}
