import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreSpinnerStyle implements KitComponentStyle {
  host(): StyleDef {
    return {
      display: 'inline-block',
    };
  }

  spinner(state: {
    size: number,
  }): StyleDef {
    return {
      display: 'inline-block',
      width: state.size,
      height: state.size,
      color: 'inherit',
      verticalAlign: 'middle',
      pointerEvents: 'none',
      boxSizing: 'border-box',
    };
  }
}
