import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultLoadingBarStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  bar(): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getColor(params.modules.loadingBar.color);
    return {
      background: color.background,
      boxShadow: `-7px 2px 11px 0 ${color.background}`,
      height: 4,
      width: '100%',
    }
  }

  host(): StyleDef {
    return {
      height: 15,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1,
      overflow: 'hidden',
    };
  }
}
