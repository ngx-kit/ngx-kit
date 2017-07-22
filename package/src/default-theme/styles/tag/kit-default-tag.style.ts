import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultTagStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    const params = this.theme.params;
    return {
      display: 'inline-block',
      lineHeight: 20,
      height: 22,
      padding: [0, params.grid.h],
      borderRadius: params.border.radius.s,
      border: [1, 'solid', '#e9e9e9'],
      background: '#f3f3f3',
      fontSize: 12,
      transition: 'all .3s cubic-bezier(.78,.14,.15,.86)',
      opacity: 1,
      marginRight: 8,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    };
  }
}
