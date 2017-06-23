import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultFormErrorStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {visible: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      display: 'none',
      color: params.colors.error.color,
      ...this.def.toggle(state.visible, {
        display: 'block',
      }),
    };
  }

}
