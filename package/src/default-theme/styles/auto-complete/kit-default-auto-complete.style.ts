import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';

@Injectable()
export class KitDefaultAutoCompleteStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
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
      borderBottom: [1, 'solid', params.moduleAutoComplete.colors.resultItem.base.border],
      cursor: 'pointer',
      padding: `${this.theme.params.grid.v / 4}px ${this.theme.params.grid.h}px`,
      ...applyTypoColorSet(params.moduleAutoComplete.colors.resultItem.base),
      $nest: {
        '&:hover': {
          ...applyTypoColorSet(params.moduleAutoComplete.colors.resultItem.hover),
          borderColor: params.moduleAutoComplete.colors.resultItem.hover.border,
        },
      },
      ...defToggle(state.active, {
        ...applyTypoColorSet(params.moduleAutoComplete.colors.resultItem.active),
        borderColor: params.moduleAutoComplete.colors.resultItem.active.border,
      }),
    };
  }

  results(): StyleDef {
    return {
      boxShadow: this.theme.params.shadows.deep,
    };
  }
}
