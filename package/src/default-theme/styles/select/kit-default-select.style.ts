import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultSelectStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  option(state: {selected: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      background: params.moduleSelect.colors.base.background,
      border: [params.borders.width, 'solid', params.moduleSelect.colors.base.border],
      borderRadius: params.borders.radius.s,
      cursor: 'pointer',
      marginBottom: params.grid.v / 2,
      padding: `${params.grid.v / 2}px ${params.grid.h}px`,
      transition: 'background 0.2s',
      $nest: {
        '&:hover': {
          background: params.moduleSelect.colors.hover.background,
          borderColor: params.moduleSelect.colors.hover.border,
          color: params.moduleSelect.colors.hover.text,
        },
      },
      ...this.def.toggle(state.selected, {
        background: params.moduleSelect.colors.selected.background,
        borderColor: params.moduleSelect.colors.selected.border,
        color: params.moduleSelect.colors.selected.text,
      }),
    };
  }
}
