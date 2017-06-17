import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { RegistrationDef, StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultHostContainerStyle implements KitComponentStyle {

  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService,
              private color: StylerColorService) {
  }

  getStyles(): RegistrationDef {
    const params = this.theme.params;
    return {
      host: {
        $states: {
          position: [{
            center: {
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000,
            }
          }],
          overlay: {
            background: this.color.rgba(0, 0, 0, .7),
          }
        },
      },
    };
  }

}
