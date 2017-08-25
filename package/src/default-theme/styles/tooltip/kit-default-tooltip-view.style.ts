import { Inject, Injectable } from '@angular/core';
import { opacify, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { Swatch } from '../../meta/params';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';

@Injectable()
export class KitDefaultTooltipViewStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  tooltip(state: {
    color: string,
  }): StyleDef {
    const params = this.theme.params;
    const color: Swatch = state.color
        ? params.colors.swatches[state.color]
        : {base: params.colors.invert, invert: params.colors.background};
    return {
      borderRadius: params.borders.radius,
      padding: [params.grid.v / 2, params.grid.h],
      boxShadow: params.shadows.overlay,
      ...applyTypoColorSet({
        background: opacify(-.2, color.base),
        text: color.invert,
      }),
    };
  }
}
