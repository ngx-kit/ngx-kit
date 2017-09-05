import { Inject, Injectable } from '@angular/core';
import { mix, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { Swatch } from '../../meta/params';
import { applyColorSet } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultAlertStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  close(state: {}, cs: {
    color: string;
  }): StyleDef {
    const params = this.theme.params;
    const color: Swatch = params.colors.swatches[cs.color || 'default'];
    return {
      background: 'transparent',
      border: 0,
      color: mix(.1, color.base, params.colors.invert),
      margin: 0,
      padding: 0,
    };
  }

  host(state: {
    closed: boolean,
  }, cs: {
    color: string;
  }): StyleDef {
    const params = this.theme.params;
    const color: Swatch = params.colors.swatches[cs.color || 'default'];
    return {
      borderRadius: params.borders.radius,
      margin: [params.grid.v, 0],
      padding: [params.grid.v, params.grid.h * 2],
      ...applyColorSet({
        background: mix(.7, color.base, params.colors.background),
        border: mix(.85, color.base, params.colors.background),
        text: mix(.2, color.base, params.colors.invert),
      }, params.borders.width),
    };
  }
}
