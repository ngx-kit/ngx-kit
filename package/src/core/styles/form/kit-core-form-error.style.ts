import { Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreFormErrorStyle implements KitComponentStyle {
  host(state: {visible: boolean}): StyleDef {
    return {
      display: 'none',
      ...defToggle(state.visible, {
        display: 'block',
      }),
    };
  }
}
