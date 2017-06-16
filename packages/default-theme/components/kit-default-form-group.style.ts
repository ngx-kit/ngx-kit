import { Inject, Injectable } from '@angular/core';

import { KitFormGroupStyle, KitFormGroupStyleDef, kitTheme } from '@ngx-kit/core';
import { StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultFormGroupStyle implements KitFormGroupStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): KitFormGroupStyleDef {
    const params = this.theme.params;
    return {
      host: {
        display: 'block',
        $states: {
          error: {
            border: [1, 'solid', params.colors.error.color],
          }
        }
      },
    };
  }

}
