import { Inject, Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { ColorsSet } from '../../meta/params';

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
    const colors = params.colors.inputs;
    return {
      borderRadius: this.theme.params.borders.radius,
      transition: this.theme.params.transitions.default,
      ...defToggle(state.checked,
          defMerge([
            {
              $nest: {
                '&::after': {
                  transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
                },
              },
            },
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
                  // checked && readonly
                  ...defToggle(state.readonly, applyChecked(colors.readonly, params.borders.width)),
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
                // non-checked && readonly
                ...defToggle(state.readonly, applyNonChecked(colors.readonly, params.borders.width)),
              }),
      ),
    };
  }
}

function applyChecked(set: ColorsSet, borderWidth: number) {
  return {
    background: set.background,
    border: [borderWidth, 'solid', set.border],
    $nest: {
      '&::after': {
        borderColor: set.border,
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
