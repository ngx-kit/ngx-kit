import { Inject, Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet, BORDER_BOTTOM, BORDER_RIGHT } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultMenuStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {direction: 'horizontal' | 'vertical'}): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.menus;
    return {
      ...defPick(state.direction, {
        horizontal: {
          ...applyColorSet(colors.menu, params.borders.width, BORDER_BOTTOM),
        },
        vertical: {
          ...applyColorSet(colors.menu, params.borders.width, BORDER_RIGHT),
        },
      }, 'horizontal'),
    };
  }
}
