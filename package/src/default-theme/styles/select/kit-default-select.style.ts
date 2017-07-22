import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerColorService, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultSelectStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  option(state: {selected: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      border: `${params.border.width}px solid ${params.colors.border.color}`,
      borderRadius: params.border.radius.s,
      cursor: 'pointer',
      marginBottom: params.grid.v / 2,
      padding: `${params.grid.v / 2}px ${params.grid.h}px`,
      transition: 'background 0.2s',
      ...this.def.toggle(state.selected, {
        background: this.theme.colorMod(.05, params.colors.body.color),
        borderColor: this.theme.colorMod(.1, params.colors.border.color),
      }),
    };
  }
}
