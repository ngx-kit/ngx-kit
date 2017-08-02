import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { KitDefaultThemeParamsAlertColor } from '../../meta';

@Injectable()
export class KitDefaultAlertStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  close(state: {
    color: string,
  }): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getModuleColor('Alert', state.color) as KitDefaultThemeParamsAlertColor;
    return {
      background: 'transparent',
      border: 0,
      color: color.closeText,
      cursor: 'pointer',
      float: 'right',
      margin: 0,
      padding: 0,
    };
  }

  host(state: {
    color: string,
    closed: boolean,
  }): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getModuleColor('Alert', state.color) as KitDefaultThemeParamsAlertColor;
    return {
      background: color.background,
      border: [1, 'solid', color.border],
      borderRadius: params.borders.radius.s,
      color: color.text,
      display: 'block',
      margin: [params.grid.v, 0],
      padding: [params.grid.v, params.grid.h * 2],
      ...this.def.toggle(state.closed, {
        display: 'none',
      }),
    };
  }
}
