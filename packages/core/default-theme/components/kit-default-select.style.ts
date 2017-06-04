import { Inject, Injectable } from '@angular/core';

import { StylerColorService } from '@ngx-kit/styler';

import { KitSelectStyle, KitSelectStyleSet } from '../../meta/components/select-style';
import { KitDefaultThemeService } from '../kit-default-theme.service';
import { kitTheme } from '../../meta/tokens';

@Injectable()
export class KitDefaultSelectStyle implements KitSelectStyle {

  constructor(private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  getStyles(): KitSelectStyleSet {
    const params = this.theme.params;
    return {
      host: {},
      option: {
        border: `${params.border.width}px solid ${params.colors.border.color}`,
        borderRadius: params.border.radius.s,
        cursor: 'pointer',
        marginBottom: params.grid.v / 2,
        padding: `${params.grid.v / 2}px ${params.grid.h}px`,
        transition: 'background 0.2s',
        $states: {
          selected: {
            background: this.theme.colorMod(.05, params.colors.body.color),
            borderColor: this.theme.colorMod(.1, params.colors.border.color),
          },
        },
      },
    };
  }

}
