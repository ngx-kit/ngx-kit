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

  tooltip(): StyleDef {
    const params = this.theme.params;
    return {
      borderRadius: params.borders.radius,
      padding: [params.grid.v / 2, params.grid.h],
      ...applyColorSet(params.moduleTooltip.colors.tooltip),
    };
  }
}
