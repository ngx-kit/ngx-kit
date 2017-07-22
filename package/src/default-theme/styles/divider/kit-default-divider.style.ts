import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultDividerStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '16px 0',
    };
  }

  line(): StyleDef {
    return {
      flexGrow: 1,
      borderTop: '1px solid rgba(34,36,38,.15)',
      borderBottom: '1px solid rgba(255,255,255,.1)',
    };
  }

  text(): StyleDef {
    return {
      padding: '0 16px',
      $nest: {
        '&:empty': {
          display: 'none',
        },
      },
    };
  }
}
