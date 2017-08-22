import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';

@Injectable()
export class KitDefaultMenuGroupTitleStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.menus;
    return {
      display: 'block',
      fontSize: params.moduleMenu.titleFontSize,
      padding: [0, params.grid.h, params.grid.v / 2],
      ...applyTypoColorSet(colors.groupTitle),
    };
  }
}
