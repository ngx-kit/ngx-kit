import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultModalHeaderStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.modals;
    return {
      padding: [params.grid.v * 2, params.grid.h * 4],
      fontSize: '1.3rem',
      fontWeight: 600,
      borderTopLeftRadius: params.borders.radius * 2,
      borderTopRightRadius: params.borders.radius * 2,
      borderBottom: [params.borders.width, 'solid', colors.modal.border],
    };
  }
}
