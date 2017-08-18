import { Inject, Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultRadioStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  input(): StyleDef {
    return {
      position: 'absolute',
      left: 0,
      zIndex: 1,
      cursor: 'pointer',
      opacity: 0,
      filter: 'alpha(opacity=0)',
      top: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
    };
  }

  label(): StyleDef {
    return {
      cursor: 'pointer',
      userSelect: 'none',
    };
  }

  radio(): StyleDef {
    return {
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      outline: 'none',
      display: 'inline-block',
      lineHeight: 1,
      position: 'relative',
      verticalAlign: 'text-bottom',
    };
  }

  view(state: {
    checked: boolean;
    hover: boolean;
    focus: boolean;
    disabled: boolean;
  }): StyleDef {
    const params = this.theme.params;
    return {
      position: 'relative',
      top: 0,
      left: 0,
      display: 'block',
      width: 14,
      height: 14,
      borderRadius: '50%',
      transition: params.transitions.default,
      ...defToggle(state.checked, defMerge([
            {
              $nest: {
                '&:after': {
                  position: 'absolute',
                  left: 4,
                  top: 4,
                  display: 'table',
                  width: 6,
                  height: 6,
                  border: 0,
                  borderRadius: '50%',
                  content: '" "',
                },
              },
            },
            defToggle(state.disabled,
                // checked && disabled
                applyChecked(params.moduleRadio.colors.checked.base, params.borders.width),
                {
                  // checked
                  ...applyChecked(params.moduleRadio.colors.checked.base, params.borders.width),
                  // checked && hover
                  ...defToggle(state.hover, applyChecked(params.moduleRadio.colors.checked.hover, params.borders.width)),
                  // checked && focus
                  ...defToggle(state.focus, applyChecked(params.moduleRadio.colors.checked.focus, params.borders.width)),
                }),
          ]),
          defToggle(state.disabled,
              // non-checked && disabled
              applyNonChecked(params.moduleRadio.colors.nonChecked.disabled, params.borders.width),
              {
                // non-checked
                ...applyNonChecked(params.moduleRadio.colors.nonChecked.base, params.borders.width),
                /// non-checked && hover
                ...defToggle(state.hover, applyNonChecked(params.moduleRadio.colors.nonChecked.hover, params.borders.width)),
                // non-checked && focus
                ...defToggle(state.focus, applyNonChecked(params.moduleRadio.colors.nonChecked.focus, params.borders.width)),
              })),
    }
  }
}

function applyChecked(set: {border: string, background: string, dot: string}, borderWidth: number) {
  return {
    background: set.background,
    border: [borderWidth, 'solid', set.border],
    $nest: {
      '&::after': {
        backgroundColor: set.dot,
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
