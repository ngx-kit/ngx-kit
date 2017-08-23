import { Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreMenuStyle implements KitComponentStyle {
  host(state: {direction: 'horizontal' | 'vertical'}): StyleDef {
    return {
      display: 'flex',
      justifyContent: 'flex-start',
      ...defPick(state.direction, {
        horizontal: {
          flexDirection: 'row',
        },
        vertical: {
          flexDirection: 'column',
        },
      }, 'horizontal'),
    };
  }
}
