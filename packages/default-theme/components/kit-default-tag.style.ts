import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { RegistrationDef, StylerColorService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultTagStyle implements KitComponentStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): RegistrationDef {
    const params = this.theme.params;
    return {
      host: {
        display: 'inline-block',
        lineHeight: 20,
        height: 22,
        padding: [0, params.grid.h],
        borderRadius: params.border.radius.s,
        border: [1, 'solid', '#e9e9e9'],
        background: '#f3f3f3',
        fontSize: 12,
        transition: 'all .3s cubic-bezier(.78,.14,.15,.86)',
        opacity: 1,
        marginRight: 8,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
      },
    };
  }

}
