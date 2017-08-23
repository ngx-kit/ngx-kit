import { Inject, Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet } from '../../utils/apply-color-set';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';

@Injectable()
export class KitDefaultSelectStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  dropdownOption(state: {
    selected: boolean;
  }): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.inputs.options;
    return defMerge([
      {
        padding: [params.grid.v / 2, params.grid.h],
        ...applyTypoColorSet(colors.base),
        $nest: {
          '&:not(:last-child)': {
            borderBottom: [params.borders.width, 'solid', colors.base.border],
          },
        },
      },
      defToggle(state.selected, {
        ...applyColorSet(colors.selected, params.borders.width),
      }, {
        $nest: {
          '&:hover': {
            ...applyColorSet(colors.hover, params.borders.width),
          },
        },
      }),
    ]);
  }

  dropdownOptions(): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.inputs;
    return {
      ...applyColorSet(colors.base, params.borders.width),
    };
  }

  dropdownSelect(state: {
    focus: boolean;
  }): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.inputs;
    return {
      borderRadius: params.borders.radius,
      transition: 'background 0.2s',
      padding: [params.grid.v / 2, params.grid.h],
      ...applyColorSet(colors.base, params.borders.width),
      ...defToggle(state.focus, {
        transition: '0.2s',
        outline: 'none',
        ...applyColorSet(colors.focus, params.borders.width),
      }, {
        $nest: {
          '&:hover': {
            outline: 'none',
            ...applyColorSet(colors.hover, params.borders.width),
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
    const colors = params.colors.inputs;
    return {
      borderRadius: params.borders.radius,
      transition: 'background 0.2s',
      padding: [params.grid.v / 2, params.grid.h],
      ...defToggle(state.disabled, {
        ...applyColorSet(colors.disabled, params.borders.width),
      }, {
        ...applyColorSet(colors.base, params.borders.width),
        $nest: {
          '&:hover': {
            outline: 'none',
            ...applyColorSet(colors.hover, params.borders.width),
          },
          '&:focus': {
            transition: '0.2s',
            outline: 'none',
            ...applyColorSet(colors.focus, params.borders.width),
          },
        },
      }),
    };
  }

  option(state: {selected: boolean}): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.inputs.options;
    return {
      borderRadius: params.borders.radius,
      marginBottom: params.grid.v / 2,
      padding: `${params.grid.v / 2}px ${params.grid.h}px`,
      transition: 'background 0.2s',
      ...applyColorSet(colors.base, params.borders.width),
      ...defToggle(state.selected, {
        ...applyColorSet(colors.selected, params.borders.width),
      }, {
        $nest: {
          '&:hover': {
            ...applyColorSet(colors.hover, params.borders.width),
          },
        },
      }),
    };
  }
}
