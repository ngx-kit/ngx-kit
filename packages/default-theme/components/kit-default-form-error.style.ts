import { Inject, Injectable } from '@angular/core';

import {
  KitFormErrorStyle, KitFormErrorStyleDef, kitTheme
} from '@ngx-kit/core';
import { StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultFormErrorStyle implements KitFormErrorStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): KitFormErrorStyleDef {
    const params = this.theme.params;
    return {
      host: {
        display: 'none',
        color: params.colors.error.color,
        $states: {
          visible: {
            display: 'block',
          }
        }
      },
    };
  }

}
