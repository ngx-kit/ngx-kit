import { Injectable } from '@angular/core';
import { ComponentStyle, defToggle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class KitSlideStyle implements ComponentStyle {
  constructor() {
  }

  host(state: {
    leaving: boolean;
  }): StyleDef {
    return {
      display: 'block',
      position: 'relative',
      ...defToggle(state.leaving, {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
      }),
    };
  }
}
