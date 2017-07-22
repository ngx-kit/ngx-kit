import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../core/meta/component';
import { kitTheme } from '../../core/meta/tokens';
import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultMathInputStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  result(): StyleDef {
    return {};
  }
}
