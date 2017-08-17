import { Inject, Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet } from '../../utils/apply-color-set';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';

@Injectable()
export class KitDefaultDatePickerStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  date(state: {outside: boolean, active: boolean}): StyleDef {
    const params = this.theme.params;
    return defMerge([
      {
        boxSizing: 'border-box',
        cursor: 'pointer',
        flexShrink: 0,
        textAlign: 'center',
        transition: 'all .2s',
        width: '100%',
        borderRadius: params.borders.radius,
        padding: params.moduleDatePicker.datePadding,
      },
      ...applyColorSet(params.moduleDatePicker.colors.date.base),
      defToggle(state.outside, {
        ...applyColorSet(params.moduleDatePicker.colors.date.outside),
      }),
      defToggle(state.active, {
        boxShadow: params.shadows.element,
        cursor: 'default',
        fontWeight: 600,
        ...applyColorSet(params.moduleDatePicker.colors.date.active),
        $nest: {
          '&:hover': {},
        },
      }, {
        $nest: {
          '&:hover': {
            ...applyColorSet(params.moduleDatePicker.colors.date.hover),
          },
        },
      }),
    ]);
  }

  dates(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    };
  }

  head(): StyleDef {
    const params = this.theme.params;
    return {
      display: 'flex',
      flexDirection: 'row',
      padding: [params.grid.v, params.grid.h],
    };
  }

  headButton(): StyleDef {
    const params = this.theme.params;
    return {
      margin: [0, params.grid.h / 2],
    };
  }

  headTitle(): StyleDef {
    return {
      flexGrow: 1,
      textAlign: 'center',
    };
  }

  host(): StyleDef {
    const params = this.theme.params;
    return {
      display: 'block',
      ...applyTypoColorSet(params.moduleDatePicker.colors.picker),
    };
  }

  table(): StyleDef {
    const params = this.theme.params;
    return {
      border: 0,
      $nest: {
        '& tr': {
          border: 0,
        },
        '& th': {
          border: 0,
          textAlign: 'center',
          padding: params.moduleDatePicker.dateCellPadding,
        },
        '& td': {
          border: 0,
          textAlign: 'center',
          padding: params.moduleDatePicker.dateCellPadding,
        },
      },
    };
  }

  weekday(): StyleDef {
    const params = this.theme.params;
    return {
      ...applyTypoColorSet(params.moduleDatePicker.colors.weekday),
    };
  }
}
