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
    return {
      display: 'block',
      borderRadius: '0 0 4px 4px',
      borderTop: '1px solid #e0e0e0',
      padding: '16px 32px',
      textAlign: 'right',
    };
  }
}
