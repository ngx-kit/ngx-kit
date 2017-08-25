import { Inject, Injectable } from '@angular/core';
import { defToggle, mix, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultAccordionPanelStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  content(): StyleDef {
    const params = this.theme.params;
    return {
      padding: [params.grid.v * 2, params.grid.h * 3],
      background: params.colors.background,
      color: params.colors.invert,
    };
  }

  host(): StyleDef {
    return {};
  }

  title(state: {active: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      height: params.grid.v * 4,
      lineHeight: params.grid.h * 4,
      paddingLeft: params.grid.v * 3,
      background: params.colors.border,
      color: params.colors.invert,
      ...defToggle(state.active, {
        background: mix(.9, params.colors.border, params.colors.invert),
      }, {
        $nest: {
          '&:hover': {
            background: mix(.95, params.colors.border, params.colors.invert),
          },
        },
      }),
    };
  }
}
