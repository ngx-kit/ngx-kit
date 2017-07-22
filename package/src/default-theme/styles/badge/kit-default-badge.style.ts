import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultBadgeStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    color: string,
    size: any,
  }): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getColor(state.color || params.modules.badge.defaultColor);
    return {
      borderRadius: '1rem',
      display: 'inline-block',
      fontWeight: 'normal',
      minWidth: '1px',
      textAlign: 'center',
      lineHeight: '1',
      background: color.background,
      color: color.text,
      ...this.def.pick(state.size, {
        s: {
          padding: `${params.grid.v / 4}px ${params.grid.h / 2}px`,
          fontSize: '.8rem',
        },
        m: {
          padding: `${params.grid.v / 4}px ${params.grid.h}px`,
          fontSize: '.9rem',
        },
        l: {
          padding: `${params.grid.v / 2}px ${params.grid.h}px`,
          fontSize: '1.1rem',
        },
      }, 'm'),
    };
  }
}
