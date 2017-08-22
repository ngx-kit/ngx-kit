import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultFormGroupStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {error: boolean}): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.swatches.error;
    return {
      display: 'block',
      ...defToggle(state.error, {
        border: [params.borders.width, 'solid', colors.base],
      }),
    };
  }
}
