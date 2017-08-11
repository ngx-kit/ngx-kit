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
    return {
      display: 'block',
      ...defToggle(state.error, {
        border: [1, 'solid', params.moduleForm.colors.error.border],
      }),
    };
  }
}
