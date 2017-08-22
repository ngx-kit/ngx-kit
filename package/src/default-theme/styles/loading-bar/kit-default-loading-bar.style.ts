import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultLoadingBarStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  bar(): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.loaders;
    return {
      background: colors.base,
      boxShadow: `-7px 2px 11px 0 ${colors.shadow}`,
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
