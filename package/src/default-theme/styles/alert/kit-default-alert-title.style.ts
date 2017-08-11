import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { KitDefaultThemeParamsAlertColor } from '../../meta/params';

@Injectable()
export class KitDefaultAlertTitleStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {
    color: string;
  }): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getModuleColor('Alert', state.color) as KitDefaultThemeParamsAlertColor;
    return {
      color: color.titleText,
      display: 'block',
      fontSize: params.moduleAlert.titleFontSize,
      margin: [params.grid.v / 2, 0, params.grid.v],
    };
  }
}
