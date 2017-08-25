import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet } from '../../utils/apply-color-set';
import { genInputDisabled, genInputHoverBorder } from '../../utils/inputs';

@Injectable()
export class KitDefaultInputStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  input(state: {
    disabled: boolean;
    readonly: boolean;
  }): StyleDef {
    const params = this.theme.params;
    return {
      borderRadius: params.borders.radius,
      transition: params.transitions.default,
      padding: [params.grid.v / 2, params.grid.h],
      boxShadow: params.shadows.element,
      ...defToggle(state.disabled, {
        ...applyColorSet(
            genInputDisabled(params.colors.background, params.colors.invert, params.colors.input),
            params.borders.width,
        ),
      }, {
        ...applyColorSet({
          background: params.colors.background,
          border: params.colors.input,
          text: params.colors.invert,
        }, params.borders.width),
        $nest: {
          '&:hover': {
            outline: 'none',
            borderColor: genInputHoverBorder(params.colors.input, params.colors.invert),
          },
          '&:focus': {
            outline: 'none',
            borderColor: params.colors.swatches.primary.base,
          },
          '&:active': {
            outline: 'none',
            borderColor: params.colors.swatches.primary.base,
          },
        },
      }),
    };
  }
}
