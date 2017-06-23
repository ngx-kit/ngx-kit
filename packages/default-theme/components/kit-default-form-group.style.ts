import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultFormGroupStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {error: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      display: 'block',
      ...this.def.toggle(state.error, {
        border: [1, 'solid', params.colors.error.color],
      }),
    };
  }

}
