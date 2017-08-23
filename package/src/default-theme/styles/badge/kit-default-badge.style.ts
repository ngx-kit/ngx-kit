import { Inject, Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitBadgePosition } from '../../../badge/meta';
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
    position: KitBadgePosition,
  }): StyleDef {
    const params = this.theme.params;
    const color: Swatch = params.colors.swatches[state.color || 'default'];
    return {
      borderRadius: '1rem',
      fontWeight: 'normal',
      minWidth: '1px',
      textAlign: 'center',
      lineHeight: '1',
      ...defPick(state.position, {
        inline: {
          display: 'inline-block',
        },
        'top-right': {
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 0,
          transform: 'translate(50%, -50%)',
        },
        'bottom-right': {
          display: 'block',
          position: 'absolute',
          bottom: 0,
          right: 0,
          transform: 'translate(50%, 50%)',
        },
        'bottom-left': {
          display: 'block',
          position: 'absolute',
          bottom: 0,
          left: 0,
          transform: 'translate(-50%, 50%)',
        },
        'top-left': {
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
        },
      }, 'inline'),
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
