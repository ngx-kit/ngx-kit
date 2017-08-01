import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultAlertStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    color: string,
  }): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getModuleColor('Alert', state.color);
    return {
      background: color.background,
      border: [1, 'solid', color.border],
      borderRadius: params.borders.radius.s,
      color: color.text,
      display: 'block',
      margin: [params.grid.v, 0],
      padding: [params.grid.v, params.grid.h * 2],
    };
  }
}
