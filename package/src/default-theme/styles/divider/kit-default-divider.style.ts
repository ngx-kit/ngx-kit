import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultDividerStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    const params = this.theme.params;
    return {
      padding: [params.grid.h * 2, 0],
    };
  }

  line(): StyleDef {
    const params = this.theme.params;
    return {
      borderBottom: [params.borders.width, 'solid', params.colors.border],
    };
  }

  text(): StyleDef {
    const params = this.theme.params;
    return {
      padding: [0, params.grid.h * 2],
    };
  }
}
