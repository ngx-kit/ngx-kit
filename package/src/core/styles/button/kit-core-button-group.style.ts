import { Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitButtonGroupDirection } from '../../../button/meta';
import { KitButtonGroupStyle } from '../../meta/styles/button-styles';

@Injectable()
export class KitCoreButtonGroupStyle implements KitButtonGroupStyle {
  host(state: {direction: KitButtonGroupDirection}): StyleDef {
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
