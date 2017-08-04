import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuGroupTitleStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    const params = this.theme.params;
    return {
      background: params.moduleMenu.colors.groupTitle.background,
      color: params.moduleMenu.colors.groupTitle.text,
      display: 'block',
      fontSize: params.moduleMenu.titleFontSize,
      padding: [0, params.grid.h, params.grid.v / 2],
    };
  }
}
