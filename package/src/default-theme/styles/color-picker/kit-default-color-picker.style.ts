import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultColorPickerStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  alpha(): StyleDef {
    const params = this.theme.params;
    return {
      marginTop: params.grid.v,
    }
  }

  cursor(): StyleDef {
    const params = this.theme.params;
    return {
      $nest: {
        '&:after': {
          border: [params.borders.width, 'solid', '#eee'],
        },
      },
    };
  }

  host(): StyleDef {
    return {};
  }

  hue(): StyleDef {
    const params = this.theme.params;
    return {
      marginTop: params.grid.v,
    }
  }

  saturation(): StyleDef {
    return {};
  }
}
