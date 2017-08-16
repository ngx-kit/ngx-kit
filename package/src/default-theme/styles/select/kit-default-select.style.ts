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
    return defMerge([
      {
        padding: [params.grid.v / 2, params.grid.h],
        cursor: 'default',
        ...applyTypoColorSet(params.moduleSelect.colors.option.base),
        $nest: {
          '&:not(:last-child)': {
            borderBottom: [1, 'solid', params.moduleSelect.colors.option.base.border],
          },
        },
      },
      defToggle(state.selected, {
        borderColor: params.moduleSelect.colors.option.selected.border,
        ...applyTypoColorSet(params.moduleSelect.colors.option.selected),
      }, {
        $nest: {
          '&:hover': {
            borderColor: params.moduleSelect.colors.option.hover.border,
            ...applyTypoColorSet(params.moduleSelect.colors.option.hover),
          },
        },
      }),
    ]);
  }

  dropdownOptions(): StyleDef {
    const params = this.theme.params;
    return {
      border: [1, 'solid', params.moduleSelect.colors.select.base.border],
    };
  }

  dropdownSelect(state: {
    focus: boolean;
  }): StyleDef {
    const params = this.theme.params;
    return {
      borderRadius: params.borders.radius,
      boxSizing: 'border-box',
      transition: 'background 0.2s',
      width: '100%',
      padding: [params.grid.v / 2, params.grid.h],
      ...applyColorSet(params.moduleSelect.colors.select.base, params.borders.width),
      ...defToggle(state.focus, {
        transition: '0.2s',
        outline: 'none',
        ...applyColorSet(params.moduleSelect.colors.select.focus, params.borders.width),
      }, {
        $nest: {
          '&:hover': {
            outline: 'none',
            ...applyColorSet(params.moduleSelect.colors.select.hover, params.borders.width),
          },
        },
      }),
    };
  }

  host(): StyleDef {
    return {};
  }

  nativeSelect(): StyleDef {
    const params = this.theme.params;
    return {
      borderRadius: params.borders.radius,
      boxSizing: 'border-box',
      transition: 'background 0.2s',
      width: '100%',
      padding: [params.grid.v / 2, params.grid.h],
      ...applyColorSet(params.moduleSelect.colors.select.base, params.borders.width),
      $nest: {
        '&:hover': {
          outline: 'none',
          ...applyColorSet(params.moduleSelect.colors.select.hover, params.borders.width),
        },
        '&:focus': {
          transition: '0.2s',
          outline: 'none',
          ...applyColorSet(params.moduleSelect.colors.select.focus, params.borders.width),
        },
      },
    };
  }

  option(state: {selected: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      borderRadius: params.borders.radius,
      cursor: 'pointer',
      marginBottom: params.grid.v / 2,
      padding: `${params.grid.v / 2}px ${params.grid.h}px`,
      transition: 'background 0.2s',
      ...applyColorSet(params.moduleSelect.colors.option.base, params.borders.width),
      ...defToggle(state.selected, {
        ...applyColorSet(params.moduleSelect.colors.option.selected, params.borders.width),
      }, {
        $nest: {
          '&:hover': {
            ...applyColorSet(params.moduleSelect.colors.option.hover, params.borders.width),
          },
        },
      }),
    };
  }
}
