import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreDividerStyle implements KitComponentStyle {
  host(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    };
  }

  line(): StyleDef {
    return {
      flexGrow: 1,
    };
  }

  text(): StyleDef {
    return {
      $nest: {
        '&:empty': {
          display: 'none',
        },
      },
    };
  }
}
