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
    const color = this.theme.getColor(params.modules.dropdownMenu.menuColor);
    return {
      background: color.background,
      border: [1, 'solid', color.border],
      borderRadius: '3px',
      boxShadow: params.shadows.deep,
      marginTop: params.grid.v / 4,
    };
  }
}
