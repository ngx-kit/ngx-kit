import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuSubStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {direction: 'vertical' | 'horizontal'}): StyleDef {
    return {
      ...this.def.pick(state.direction, {
        vertical: {},
        horizontal: {},
      }, 'vertical'),
    };
  }

}
