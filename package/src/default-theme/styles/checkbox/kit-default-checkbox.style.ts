import { Inject, Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultCheckboxStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  checkbox(): StyleDef {
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
      margin: 0,
    };
  }

  label(): StyleDef {
    return {
      cursor: 'pointer',
      userSelect: 'none',
    };
  }

  view(state: {
    checked: boolean,
    hover: boolean,
    focus: boolean,
    disabled: boolean,
    readonly: boolean,
  }): StyleDef {
    const params = this.theme.params;
    return {
      position: 'relative',
      top: 0,
      left: 0,
      display: 'block',
      width: 14,
      height: 14,
      borderRadius: this.theme.params.borders.radius,
      transition: this.theme.params.transitions.default,
      ...defToggle(state.checked,
          defMerge([
            {
              $nest: {
                '&::after': {
                  transform: 'rotate(45deg) scale(1)',
                  position: 'absolute',
                  left: 4,
                  top: 1,
                  display: 'table',
                  width: 5,
                  height: 8,
                  borderTopWidth: 0,
                  borderRightWidth: 2,
                  borderBottomWidth: 2,
                  borderLeftWidth: 0,
                  borderStyle: 'solid',
                  content: '" "',
                  transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
                },
              },
            },
            defToggle(state.disabled,
                // checked && disabled
                {
                  ...applyColors(params.moduleCheckbox.colors.checked.disabled, params.borders.width),
                  $nest: {
                    '&::after': {
                      borderColor: params.moduleCheckbox.colors.checked.disabled.check,
                    },
                  },
                },
                {
                  // checked
                  ...applyColors(params.moduleCheckbox.colors.checked.base, params.borders.width),
                  $nest: {
                    '&::after': {
                      borderColor: params.moduleCheckbox.colors.checked.base.check,
                    },
                  },
                  // checked && hover
                  ...defToggle(state.hover, {
                    ...applyColors(params.moduleCheckbox.colors.checked.hover, params.borders.width),
                    $nest: {
                      '&::after': {
                        borderColor: params.moduleCheckbox.colors.checked.hover.check,
                      },
                    },
                  }),
                  // checked && focus
                  ...defToggle(state.focus, {
                    ...applyColors(params.moduleCheckbox.colors.checked.focus, params.borders.width),
                    $nest: {
                      '&::after': {
                        borderColor: params.moduleCheckbox.colors.checked.focus.check,
                      },
                    },
                  }),
                  ...defToggle(state.readonly, {
                    // checked && readonly
                    ...applyColors(params.moduleCheckbox.colors.checked.readonly, params.borders.width),
                    $nest: {
                      '&::after': {
                        borderColor: params.moduleCheckbox.colors.checked.readonly.check,
                      },
                    },
                  }),
                }),
          ]),
          defToggle(state.disabled,
              // non-checked && disabled
              applyColors(params.moduleCheckbox.colors.nonChecked.disabled, params.borders.width),
              {
                // non-checked
                ...applyColors(params.moduleCheckbox.colors.nonChecked.base, params.borders.width),
                $nest: {
                  '&:hover': {
                    // non-checked && hover
                    ...applyColors(params.moduleCheckbox.colors.nonChecked.hover, params.borders.width),
                  },
                  '&:focus': {
                    // non-checked && focus
                    ...applyColors(params.moduleCheckbox.colors.nonChecked.focus, params.borders.width),
                  },
                },
                ...defToggle(state.readonly,
                    // non-checked && readonly
                    applyColors(params.moduleCheckbox.colors.nonChecked.readonly, params.borders.width)),
              }),
      ),
    };
  }
}

function applyChecked(set: {border: string, background: string, check: string}, borderWidth: number) {
  return {
    background: set.background,
    border: [borderWidth, 'solid', set.border],
    $nest: {
      '&:after': {
        borderColor: set.check,
      },
    },
  };
}
function applyColors(set: {border: string, background: string}, borderWidth: number) {
  return {
    background: set.background,
    border: [borderWidth, 'solid', set.border],
  }
}
