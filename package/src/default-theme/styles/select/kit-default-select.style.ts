import { Inject, Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet } from '../../utils/apply-color-set';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';
import { genInputDisabled, genInputHoverBorder } from '../../utils/inputs';
import { genMenuItemHover } from '../../utils/menus';

@Injectable()
export class KitDefaultSelectStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  dropdownOption(state: {
    selected: boolean;
  }): StyleDef {
    const params = this.theme.params;
    return defMerge([
      {
        padding: [params.grid.v / 2, params.grid.h],
        background: params.colors.background,
        color: params.colors.invert,
        $nest: {
          '&:not(:last-child)': {
            borderBottom: [params.borders.width, 'solid', params.colors.border],
          },
        },
      },
      defToggle(state.selected, {
        ...applyColorSet({
          background: params.colors.swatches.primary.base,
          border: params.colors.swatches.primary.base,
          text: params.colors.swatches.primary.invert,
        }, params.borders.width),
      }, {
        $nest: {
          '&:hover': {
            ...applyTypoColorSet(genMenuItemHover(params.colors)),
          },
        },
      }),
    ]);
  }

  dropdownOptions(): StyleDef {
    const params = this.theme.params;
    return {
      background: params.colors.background,
      border: params.colors.border,
    };
  }

  dropdownSelect(state: {
    focus: boolean;
    disabled: boolean;
  }): StyleDef {
    const params = this.theme.params;
    return {
      borderRadius: params.borders.radius,
      transition: 'background 0.2s',
      padding: [params.grid.v / 2, params.grid.h],
      boxShadow: params.shadows.element,
      ...defToggle(state.disabled, {}, {
        ...applyColorSet({
          background: params.colors.background,
          border: params.colors.input,
          text: params.colors.invert,
        }, params.borders.width),
        ...defToggle(state.focus, {
          borderColor: params.colors.swatches.primary.base,
        }),
        $nest: {
          '&:hover': {
            outline: 'none',
            borderColor: genInputHoverBorder(params.colors.input, params.colors.invert),
          },
        },
      }),
    };
  }

  host(): StyleDef {
    return {};
  }

  nativeSelect(state: {
    disabled: boolean;
  }): StyleDef {
    const params = this.theme.params;
    return {
      borderRadius: params.borders.radius,
      transition: 'background 0.2s',
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

  option(state: {selected: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      borderRadius: params.borders.radius,
      marginBottom: params.grid.v / 2,
      padding: `${params.grid.v / 2}px ${params.grid.h}px`,
      transition: 'background 0.2s',
      ...applyColorSet({
        background: params.colors.background,
        border: params.colors.border,
        text: params.colors.invert,
      }, params.borders.width),
      ...defToggle(state.selected, {
        ...applyColorSet({
          background: params.colors.swatches.primary.base,
          border: params.colors.swatches.primary.base,
          text: params.colors.swatches.primary.invert,
        }, params.borders.width),
      }, {
        $nest: {
          '&:hover': {
            ...applyColorSet(genMenuItemHover(params.colors), params.borders.width),
          },
        },
      }),
    };
  }
}
