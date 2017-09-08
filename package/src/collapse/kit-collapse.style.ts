import { Injectable } from '@angular/core';
import { ComponentStyle, defPick, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class KitCollapseStyle implements ComponentStyle {
  constructor() {
  }

  host(state: {
    state: 'in' | 'out' | 'animated',
  }): StyleDef {
    return {
      overflow: 'hidden',
      ...defPick(state.state, {
        in: {
          display: 'block',
        },
        out: {
          display: 'none',
        },
        animated: {
          display: 'block',
        },
      }),
    };
  }
}
