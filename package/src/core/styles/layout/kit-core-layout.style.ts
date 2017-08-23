import { Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreLayoutStyle implements KitComponentStyle {
  host(state: {hasSide: boolean, fullscreen: boolean}): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'column',
      ...defToggle(state.hasSide, {
        flexDirection: 'row',
      }),
      ...defToggle(state.fullscreen, {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }),
    };
  }
}
