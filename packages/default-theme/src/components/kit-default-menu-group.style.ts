import { Inject, Injectable } from '@angular/core';
import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuGroupStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {
//      padding: [this.theme.params.grid.v, this.theme.params.grid.h],
    };
  }

  items(): StyleDef {
    return {
      paddingLeft: this.theme.params.grid.h * 2,
    };
  }

  title(): StyleDef {
    return {
      color: '#888',
      fontSize: this.theme.params.typo.secondaryFontSize,
      padding: [this.theme.params.grid.v / 2, this.theme.params.grid.h],
    };
  }
}
