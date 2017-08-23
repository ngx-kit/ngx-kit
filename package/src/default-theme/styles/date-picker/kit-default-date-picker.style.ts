import { Inject, Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultDatePickerStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  date(state: {outside: boolean, active: boolean}): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.swatches.default;
    return defMerge([
      {
        textAlign: 'center',
        transition: 'all .2s',
        borderRadius: params.borders.radius,
        padding: params.moduleDatePicker.datePadding,
      },
      defToggle(state.outside, {
        opacity: .6,
      }),
      defToggle(state.active, {
        boxShadow: params.shadows.element,
        fontWeight: 600,
        $nest: {
          '&:hover': {},
        },
      }, {
        $nest: {
          '&:hover': {},
        },
      }),
    ]);
  }

  dates(): StyleDef {
    return {};
  }

  head(): StyleDef {
    const params = this.theme.params;
    return {
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
    const colors = params.colors.modals;
    return {
      ...applyColorSet(colors.modal),
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
    return {};
  }
}
