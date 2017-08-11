import { Inject, Injectable } from '@angular/core';
// kir
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultLayoutStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {hasSide: boolean, fullscreen: boolean}): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'column',
      ...defToggle(state.hasSide, {
        flexDirection: 'row',
      }),
      ...defToggle(state.fullscreen, {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }),
    };
  }
}
