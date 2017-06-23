import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

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
      boxShadow: params.shadows.deep,
      marginTop: params.grid.v / 4,
    };
  }

}
