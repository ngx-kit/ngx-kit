import { Inject, Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultMenuStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {direction: 'horizontal' | 'vertical'}): StyleDef {
    const params = this.theme.params;
    return {
      ...defPick(state.direction, {
        horizontal: {},
        vertical: {},
      }, 'horizontal'),
    };
  }
}
