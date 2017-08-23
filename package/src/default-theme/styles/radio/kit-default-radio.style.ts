import { Inject, Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { ColorsSet } from '../../meta/params';

@Injectable()
export class KitDefaultRadioStyle implements KitComponentStyle {
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

  radio(): StyleDef {
    return {};
  }

  view(state: {
    checked: boolean;
    hover: boolean;
    focus: boolean;
    disabled: boolean;
  }): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.inputs;
    return {
      transition: params.transitions.default,
      ...defToggle(state.checked, defMerge([
            defToggle(state.disabled,
                // checked && disabled
                applyChecked(colors.disabled, params.borders.width),
                {
                  // checked
                  ...applyChecked(colors.checked, params.borders.width),
                  // checked && hover
                  ...defToggle(state.hover, applyChecked(colors.hover, params.borders.width)),
                  // checked && focus
                  ...defToggle(state.focus, applyChecked(colors.focus, params.borders.width)),
                }),
          ]),
          defToggle(state.disabled,
              // non-checked && disabled
              applyNonChecked(colors.disabled, params.borders.width),
              {
                // non-checked
                ...applyNonChecked(colors.base, params.borders.width),
                /// non-checked && hover
                ...defToggle(state.hover, applyNonChecked(colors.hover, params.borders.width)),
                // non-checked && focus
                ...defToggle(state.focus, applyNonChecked(colors.focus, params.borders.width)),
              })),
    }
  }
}

function applyChecked(set: ColorsSet, borderWidth: number) {
  return {
    background: set.background,
    border: [borderWidth, 'solid', set.border],
    $nest: {
      '&::after': {
        backgroundColor: set.border,
      },
    },
  };
}
function applyNonChecked(set: {border: string, background: string}, borderWidth: number) {
  return {
    background: set.background,
    border: [borderWidth, 'solid', set.border],
  }
}
