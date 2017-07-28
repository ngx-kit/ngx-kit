import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultTagStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService,
              private def: StylerDefService) {
  }

  host(state: {
    color: string,
  }): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getColor(state.color || params.modules.tag.color);
    return {
      display: 'inline-block',
      lineHeight: 20,
      height: 22,
      padding: [0, params.grid.h],
      borderRadius: params.border.radius.s,
      background: color.background,
      color: color.text,
      border: [1, 'solid', color.border],
      fontSize: 12,
      transition: 'all .3s cubic-bezier(.78,.14,.15,.86)',
      opacity: 1,
      marginRight: 8,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    };
  }
}
