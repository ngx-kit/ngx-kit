import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { Swatch } from '../../meta/params';
import { applyColorSet } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultAlertStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  close(state: {
    color: string;
  }): StyleDef {
    const params = this.theme.params;
    const color: Swatch = params.colors.swatches[state.color || 'default'];
    return {
      background: 'transparent',
      border: 0,
      color: color.base,
      cursor: 'pointer',
      float: 'right',
      margin: 0,
      padding: 0,
    };
  }

  host(state: {
    color: string,
    closed: boolean,
  }): StyleDef {
    const params = this.theme.params;
    const color: Swatch = params.colors.swatches[state.color || 'default'];
    return {
      borderRadius: params.borders.radius,
      display: 'block',
      margin: [params.grid.v, 0],
      padding: [params.grid.v, params.grid.h * 2],
      ...applyColorSet({
        background: color.light,
        border: color.base,
        text: color.lightText,
      }, params.borders.width),
      ...defToggle(state.closed, {
        display: 'none',
      }),
    };
  }
}
