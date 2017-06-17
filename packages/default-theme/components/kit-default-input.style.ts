import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { RegistrationDef, StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultInputStyle implements KitComponentStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): RegistrationDef {
    const params = this.theme.params;
    return {
      host: {},
      input: {
        border: `${params.border.width}px solid ${params.colors.border.color}`,
        borderRadius: params.border.radius.s,
        transition: 'background 0.2s',
        $nest: {
          '&:focus': {},
        },
        $states: {},
      },
    };
  }

}
