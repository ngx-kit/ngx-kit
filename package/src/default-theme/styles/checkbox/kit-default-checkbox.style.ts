import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet } from '../../utils/apply-color-set';
import { genInputDisabled, genInputHoverBorder } from '../../utils/inputs';

@Injectable()
export class KitDefaultCheckboxStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  checkbox(): StyleDef {
    return {};
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

  view(state: {
    checked: boolean;
    hover: boolean;
    focus: boolean;
    disabled: boolean;
    readonly: boolean;
  }): StyleDef {
    const params = this.theme.params;
    return {
      borderRadius: this.theme.params.borders.radius,
      transition: this.theme.params.transitions.default,
      ...defToggle(state.disabled,
          // disabled
          applyColorSet(
              genInputDisabled(params.colors.background, params.colors.invert, params.colors.input),
              params.borders.width,
          ),
          {
            background: params.colors.background,
            border: [params.borders.width, 'solid', params.colors.input],
            $nest: {
              '&::after': {
                borderColor: params.colors.swatches.primary.base,
              },
            },
            /// hover
            ...defToggle(state.hover, {
              borderColor: genInputHoverBorder(params.colors.input, params.colors.invert),
            }),
            // focus
            ...defToggle(state.focus, {
              borderColor: params.colors.swatches.primary.base,
            }),
          }),
    };
  }
}
