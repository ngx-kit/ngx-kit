import { Inject, Injectable } from '@angular/core';
import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultTooltipViewStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  tooltip(): StyleDef {
    return {
      background: 'rgba(0,0,0,.5)',
      color: '#ffffff',
      borderRadius: '2px',
      padding: '4px 8px',
    };
  }
}
