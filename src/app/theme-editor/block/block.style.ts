import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class BlockStyle implements ComponentStyle {
  constructor() {
  }

  block(): StyleDef {
    return {};
  }

  box(): StyleDef {
    return {
      cursor: 'pointer',
      display: 'block',
      $nest: {
        '& input': {
          background: 'transparent',
          color: '#fff',
          textShadow: '2px 0 1px #555',
        },
      },
    };
  }

  host(): StyleDef {
    return {};
  }

  inner(): StyleDef {
    return {
      display: 'block',
      padding: [8, 2, 8, 4],
      borderBottom: [1, 'solid', '#bbb'],
      background: 'rgba(0,0,0,.07)'
    };
  }

  name(): StyleDef {
    return {
      cursor: 'pointer',
      margin: [4, 0],
    }
  }
}
