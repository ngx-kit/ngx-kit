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
      borderRadius: params.borders.radius,
      boxShadow: params.shadows.deep,
      marginTop: params.grid.v / 4,
      background: params.colors.background,
      border: [params.borders.width, 'solid', params.colors.border],
      color: params.colors.invert,
    };
  }
}
