import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultSelectStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  dropdownOption(state: {
    selected: boolean;
  }): StyleDef {
    const params = this.theme.params;
    return this.def.merge([
      {
        background: params.moduleSelect.colors.option.base.background,
        color: params.moduleSelect.colors.option.base.text,
        padding: [params.grid.v / 2, params.grid.h],
        $nest: {
          '&:not(:last-child)': {
            borderBottom: [1, 'solid', params.moduleSelect.colors.option.base.border],
          },
        },
      },
      this.def.toggle(state.selected, {
        borderColor: params.moduleSelect.colors.option.selected.border,
        background: params.moduleSelect.colors.option.selected.background,
        color: params.moduleSelect.colors.option.selected.text,
      }, {
        $nest: {
          '&:hover': {
            background: params.moduleSelect.colors.option.hover.background,
            borderColor: params.moduleSelect.colors.option.hover.border,
            color: params.moduleSelect.colors.option.hover.text,
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
      background: params.moduleSelect.colors.select.base.background,
      border: [params.borders.width, 'solid', params.moduleSelect.colors.select.base.border],
      borderRadius: params.borders.radius.s,
      boxSizing: 'border-box',
      color: params.moduleSelect.colors.select.base.text,
      transition: 'background 0.2s',
      width: '100%',
      padding: [params.grid.v / 2, params.grid.h],
      ...this.def.toggle(state.focus, {
        background: params.moduleSelect.colors.select.focus.background,
        borderColor: params.moduleSelect.colors.select.focus.border,
        color: params.moduleSelect.colors.select.focus.text,
        transition: '0.2s',
        outline: 'none',
      }, {
        $nest: {
          '&:hover': {
            background: params.moduleSelect.colors.select.hover.background,
            borderColor: params.moduleSelect.colors.select.hover.border,
            color: params.moduleSelect.colors.select.hover.text,
            outline: 'none',
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
      background: params.moduleSelect.colors.select.base.background,
      border: [params.borders.width, 'solid', params.moduleSelect.colors.select.base.border],
      borderRadius: params.borders.radius.s,
      boxSizing: 'border-box',
      color: params.moduleSelect.colors.select.base.text,
      transition: 'background 0.2s',
      width: '100%',
      padding: [params.grid.v / 2, params.grid.h],
      $nest: {
        '&:hover': {
          background: params.moduleSelect.colors.select.hover.background,
          borderColor: params.moduleSelect.colors.select.hover.border,
          color: params.moduleSelect.colors.select.hover.text,
          outline: 'none',
        },
        '&:focus': {
          background: params.moduleSelect.colors.select.focus.background,
          borderColor: params.moduleSelect.colors.select.focus.border,
          color: params.moduleSelect.colors.select.focus.text,
          transition: '0.2s',
          outline: 'none',
        },
      },
    };
  }

  option(state: {selected: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      background: params.moduleSelect.colors.option.base.background,
      border: [params.borders.width, 'solid', params.moduleSelect.colors.option.base.border],
      borderRadius: params.borders.radius.s,
      cursor: 'pointer',
      marginBottom: params.grid.v / 2,
      padding: `${params.grid.v / 2}px ${params.grid.h}px`,
      transition: 'background 0.2s',
      ...this.def.toggle(state.selected, {
        background: params.moduleSelect.colors.option.selected.background,
        borderColor: params.moduleSelect.colors.option.selected.border,
        color: params.moduleSelect.colors.option.selected.text,
      }, {
        $nest: {
          '&:hover': {
            background: params.moduleSelect.colors.option.hover.background,
            borderColor: params.moduleSelect.colors.option.hover.border,
            color: params.moduleSelect.colors.option.hover.text,
          },
        },
      }),
    };
  }
}
