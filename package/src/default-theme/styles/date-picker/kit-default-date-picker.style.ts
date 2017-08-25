import { Inject, Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultDatePickerStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  date(state: {outside: boolean, active: boolean}): StyleDef {
    const params = this.theme.params;
    return defMerge([
      {
        textAlign: 'center',
        transition: 'all .2s',
        borderRadius: params.borders.radius,
        padding: 4,
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
    return {};
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
          padding: 2,
        },
        '& td': {
          border: 0,
          textAlign: 'center',
          padding: 2,
        },
      },
    };
  }

  weekday(): StyleDef {
    return {};
  }
}
