import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultModalFooterStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.modals;
    return {
      borderBottomRightRadius: params.borders.radius * 2,
      borderBottomLeftRadius: params.borders.radius * 2,
      padding: [params.grid.v * 2, params.grid.h * 4],
      textAlign: 'right',
      borderTop: [params.borders.width, 'solid', colors.modal.border],
    };
  }
}
