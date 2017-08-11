import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { KitDefaultThemeParamsBadgeColor } from '../../meta/params';

@Injectable()
export class KitDefaultBadgeStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    color: string,
    size: 's' | 'm' | 'l',
  }): StyleDef {
    const color = this.theme.getModuleColor('Badge', state.color) as KitDefaultThemeParamsBadgeColor;
    return {
      borderRadius: '1rem',
      display: 'inline-block',
      fontWeight: 'normal',
      minWidth: '1px',
      textAlign: 'center',
      lineHeight: '1',
      background: color.background,
      color: color.text,
      border: [1, 'solid', color.border],
      ...this.def.pick(state.size, {
        s: {
          padding: `${this.theme.params.grid.v / 4}px ${this.theme.params.grid.h / 2}px`,
          fontSize: '.8rem',
        },
        m: {
          padding: `${this.theme.params.grid.v / 4}px ${this.theme.params.grid.h}px`,
          fontSize: '.9rem',
        },
        l: {
          padding: `${this.theme.params.grid.v / 2}px ${this.theme.params.grid.h}px`,
          fontSize: '1.1rem',
        },
      }, 'm'),
    };
  }
}
