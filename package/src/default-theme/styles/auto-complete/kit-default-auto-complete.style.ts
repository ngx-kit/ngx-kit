import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultAutoCompleteStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  input(): StyleDef {
    return {
      display: 'block',
    };
  };

  result(state: {active: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      background: params.moduleAutoComplete.colors.resultItem.base.background,
      borderBottom: [1, 'solid', params.moduleAutoComplete.colors.resultItem.base.border],
      color: params.moduleAutoComplete.colors.resultItem.base.text,
      cursor: 'pointer',
      padding: `${this.theme.params.grid.v / 4}px ${this.theme.params.grid.h}px`,
      $nest: {
        '&:hover': {
          background: params.moduleAutoComplete.colors.resultItem.hover.background,
          borderColor: params.moduleAutoComplete.colors.resultItem.hover.border,
          color: params.moduleAutoComplete.colors.resultItem.hover.text,
        },
      },
      ...this.def.toggle(state.active, {
        background: params.moduleAutoComplete.colors.resultItem.active.background,
        borderColor: params.moduleAutoComplete.colors.resultItem.active.border,
        color: params.moduleAutoComplete.colors.resultItem.active.text,
      }),
    };
  }

  results(): StyleDef {
    return {
      boxShadow: this.theme.params.shadows.deep,
    };
  }
}
