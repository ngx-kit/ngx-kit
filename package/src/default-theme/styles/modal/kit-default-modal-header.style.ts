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
    return {
      display: 'block',
      padding: '16px 32px',
      fontSize: '1.4rem',
      fontWeight: 600,
      borderBottom: '1px solid #e0e0e0',
      borderRadius: '4px 4px 0 0',
    };
  }
}
