import { Inject, Injectable } from '@angular/core';

import { KitMathInputStyle, KitMathInputStyleDef, kitTheme } from '@ngx-kit/core';
import { StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultMathInputStyle implements KitMathInputStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): KitMathInputStyleDef {
    const params = this.theme.params;
    return {
      host: {},
      result: {},
    };
  }

}
