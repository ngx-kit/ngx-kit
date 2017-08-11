import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { KitDefaultThemeParamsAlertColor } from '../../meta/params';
import { applyColorSet } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultAlertStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  close(state: {
    color: string;
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
      borderRadius: params.borders.radius.s,
      display: 'block',
      margin: [params.grid.v, 0],
      padding: [params.grid.v, params.grid.h * 2],
      ...applyColorSet(color),
      ...defToggle(state.closed, {
        display: 'none',
      }),
    };
  }
}
