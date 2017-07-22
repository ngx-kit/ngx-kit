import { Inject, Injectable } from '@angular/core';
// kir
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultLayoutStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {hasSide: boolean, fullscreen: boolean}): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'column',
      ...this.def.toggle(state.hasSide, {
        flexDirection: 'row',
      }),
      ...this.def.toggle(state.fullscreen, {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }),
    };
  }
}
