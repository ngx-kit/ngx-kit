import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { RegistrationDef } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultButtonGroupStyle implements KitComponentStyle {

  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): RegistrationDef {
    const params = this.theme.params;
    return {
      host: {
        display: 'inline-flex',
        $states: {
          direction: [{
            horizontal: {
              flexDirection: 'row',
            },
            vertical: {
              flexDirection: 'column',
            },
          }],
        },
      },
    };
  }

}
