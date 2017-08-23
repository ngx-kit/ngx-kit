import { Injectable } from '@angular/core';
import { defMerge, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreDatePickerStyle implements KitComponentStyle {
  date(state: {outside: boolean, active: boolean}): StyleDef {
    return defMerge([
      {
        boxSizing: 'border-box',
        cursor: 'pointer',
        flexShrink: 0,
        width: '100%',
      },
      defToggle(state.active, {
        cursor: 'default',
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
    return {
      display: 'flex',
      flexDirection: 'row',
    };
  }

  headButton(): StyleDef {
    return {};
  }

  headTitle(): StyleDef {
    return {
      flexGrow: 1,
    };
  }

  host(): StyleDef {
    return {
      display: 'block',
    };
  }

  table(): StyleDef {
    return {};
  }

  weekday(): StyleDef {
    return {};
  }
}
