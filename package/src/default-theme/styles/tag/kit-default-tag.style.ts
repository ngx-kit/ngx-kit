import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { Swatch } from '../../meta/params';
import { applyColorSet } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultTagStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    color: string,
  }): StyleDef {
    const params = this.theme.params;
    const color: Swatch = params.colors.swatches[state.color || 'default'];
    return {
      display: 'inline-block',
      lineHeight: 20,
      height: 22,
      padding: [0, params.grid.h],
      borderRadius: params.borders.radius,
      fontSize: 12,
      transition: 'all .3s cubic-bezier(.78,.14,.15,.86)',
      opacity: 1,
      marginRight: 8,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      ...applyColorSet({
        background: color.base,
        border: color.base,
        text: color.baseText,
      }, params.borders.width),
    };
  }
}
