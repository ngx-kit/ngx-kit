import { Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreButtonGroupStyle implements KitComponentStyle {
  host(state: {direction: any}): StyleDef {
    return {
      display: 'inline-flex',
      ...defPick(state.direction, {
        horizontal: {
          flexDirection: 'row',
        },
        vertical: {
          flexDirection: 'column',
          $nest: {},
        },
      }, 'horizontal'),
    };
  }
}
