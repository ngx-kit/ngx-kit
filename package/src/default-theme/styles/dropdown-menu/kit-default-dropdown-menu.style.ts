import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultDropdownMenuStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  menu(): StyleDef {
    const params = this.theme.params;
    return {
      background: params.colors.body.color,
      border: [1, 'solid', params.colors.border.color],
      borderRadius: '3px',
      boxShadow: params.shadows.deep,
      marginTop: params.grid.v / 4,
    };
  }
}
