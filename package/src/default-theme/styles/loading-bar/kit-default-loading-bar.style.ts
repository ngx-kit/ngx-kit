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
    return {
      background: params.colors.swatches.primary.base,
      boxShadow: `-7px 2px 11px 0 ${params.colors.swatches.primary.base}`,
      height: 4,
    }
  }

  host(): StyleDef {
    return {
      height: 15,
    };
  }
}
