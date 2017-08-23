import { Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreAlertStyle implements KitComponentStyle {
  close(): StyleDef {
    return {
      cursor: 'pointer',
      float: 'right',
    };
  }

  host(state: {
    closed: boolean,
  }): StyleDef {
    return {
      display: 'block',
      ...defToggle(state.closed, {
        display: 'none',
      }),
    };
  }
}
