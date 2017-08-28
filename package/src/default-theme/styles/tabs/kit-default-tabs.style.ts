import { Inject, Injectable } from '@angular/core';
import { defToggle, mix, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet, BORDER_BOTTOM, BORDER_LEFT, BORDER_RIGHT } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultTabsStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  nav(): StyleDef {
    const params = this.theme.params;
    return {
      background: params.colors.border,
      color: params.colors.invert,
    };
  }

  panel(): StyleDef {
    const params = this.theme.params;
    return {
      padding: [this.theme.params.grid.v * 2, this.theme.params.grid.h * 2],
      ...applyColorSet({
        background: params.colors.background,
        border: params.colors.border,
        text: params.colors.invert,
      }, params.borders.width, BORDER_RIGHT | BORDER_BOTTOM | BORDER_LEFT),
    };
  }

  tab(state: {active: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      padding: [params.grid.v, params.grid.h],
      borderBottom: [params.borders.width, 'solid', params.colors.border],
      $nest: {
        '&:hover': {
          background: mix(.95, params.colors.border, params.colors.invert),
        },
      },
      ...defToggle(state.active, {
        borderBottomColor: params.colors.swatches.primary.base,
      }),
    };
  }
}
