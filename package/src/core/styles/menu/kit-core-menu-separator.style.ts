import { Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreMenuSeparatorStyle implements KitComponentStyle {
  host(state: {parentDirection: 'vertical' | 'horizontal'}): StyleDef {
    return {
      display: 'block',
      borderStyle: 'solid',
      borderColor: '#000',
      borderWidth: 0,
      ...defPick(state.parentDirection, {
        vertical: {
          borderBottomWidth: 1,
        },
        horizontal: {
          borderRightWidth: 1,
        },
      }, 'vertical'),
    };
  }
}
