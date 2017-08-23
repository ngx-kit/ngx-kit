import { Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitRadioGroupDirection } from '../../../radio/meta';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreRadioGroupStyle implements KitComponentStyle {
  host(state: {direction: KitRadioGroupDirection}): StyleDef {
    return {
      ...defPick(state.direction, {
        horizontal: {},
        vertical: {
          display: 'flex',
          flexDirection: 'column',
        },
      }),
    };
  }
}
