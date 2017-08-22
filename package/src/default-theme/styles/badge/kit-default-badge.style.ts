import { Inject, Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { Swatch } from '../../meta/params';
import { applyColorSet } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultBadgeStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    color: string,
    size: 's' | 'm' | 'l',
  }): StyleDef {
    const params = this.theme.params;
    const color: Swatch = params.colors.swatches[state.color || 'default'];
    return {
      borderRadius: '1rem',
      display: 'inline-block',
      fontWeight: 'normal',
      minWidth: '1px',
      textAlign: 'center',
      lineHeight: '1',
      ...applyColorSet({
        background: color.base,
        border: color.base,
        text: color.baseText,
      }, params.borders.width),
      ...defPick(state.size, {
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
