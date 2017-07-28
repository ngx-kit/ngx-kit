import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerColorService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultInputStyle implements KitComponentStyle {
  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getColor(params.modules.input.color);
    const focusColor = this.theme.getColor(params.modules.input.focusColor);
    return {
      border: [params.border.width, 'solid', color.border],
      borderRadius: params.border.radius.s,
      boxSizing: 'border-box',
      transition: 'background 0.2s',
      width: '100%',
      padding: [params.grid.v / 2, params.grid.h],
      $nest: {
        '&:focus': {
          borderColor: focusColor.background,
          transition: '0.8s',
        },
      },
    };
  }
}
