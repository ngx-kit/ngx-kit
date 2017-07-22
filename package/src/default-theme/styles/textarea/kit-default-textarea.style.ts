import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultTextareaStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  textarea(): StyleDef {
    const params = this.theme.params;
    return {
      border: [params.border.width, 'solid', params.colors.border.color],
      borderRadius: params.border.radius.s,
      transition: 'background 0.2s',
      width: '100%',
      $nest: {
        '&:focus': {},
      },
    }
  }
}
