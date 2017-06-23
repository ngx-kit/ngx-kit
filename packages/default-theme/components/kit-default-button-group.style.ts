import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultButtonGroupStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {direction: any}): StyleDef {
    const params = this.theme.params;
    return {
      display: 'inline-flex',
      ...this.def.pick(state.direction, {
        horizontal: {
          flexDirection: 'row',
        },
        vertical: {
          flexDirection: 'column',
        },
      }, 'horizontal'),
    };
  }

}
