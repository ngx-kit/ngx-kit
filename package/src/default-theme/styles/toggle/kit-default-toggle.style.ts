import { Inject, Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultToggleStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  input(): StyleDef {
    return {};
  }

  label(): StyleDef {
    return {};
  }

  toggle(): StyleDef {
    return {};
  }

  view(state: {checked: boolean}): StyleDef {
    const params = this.theme.params;
    return defMerge([
      {
        background: params.colors.background,
        border: [params.borders.width, 'solid', params.colors.input],
        height: 22 + params.borders.width,
        transition: params.transitions.default,
        $nest: {
          '&:after': {
            background: params.colors.input,
            transition: 'all .3s,width .3s',
          },
        },
      },
      defToggle(state.checked, {
        background: params.colors.swatches.primary.base,
        borderColor: params.colors.swatches.primary.base,
        $nest: {
          '&:after': {
            background: params.colors.background,
          },
        },
      }),
    ]);
  }

  viewInner(state: {checked: boolean}): StyleDef {
    const params = this.theme.params;
    return {};
  }
}
