import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet } from '../../utils/apply-color-set';

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
    const color = params.colors.swatches[state.color || 'default'];
    return {
      borderRadius: params.borders.radius,
      padding: [params.grid.v / 2, params.grid.h],
      ...applyColorSet({
        background: color.overlay,
        border: color.overlay,
        text: color.overlayText,
      }),
    };
  }
}
