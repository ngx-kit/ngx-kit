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
    const colors = params.colors.inputs;
    return defMerge([
      {
        background: colors.base.background,
        border: [params.borders.width, 'solid', colors.base.border],
        height: 22 + params.borders.width,
        transition: params.transitions.default,
        $nest: {
          '&:after': {
            background: colors.base.border,
            transition: 'all .3s,width .3s',
          },
        },
      },
      defToggle(state.checked, {
        background: colors.checked.background,
        borderColor: colors.checked.border,
        $nest: {
          '&:after': {
            background: colors.checked.border,
          },
        },
      }),
    ]);
  }

  viewInner(state: {checked: boolean}): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.inputs;
    return {
      color: colors.base.background,
    };
  }
}
