import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class ColorsBlockStyle implements ComponentStyle {
  constructor() {
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

  holder(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
    };
  }

  host(): StyleDef {
    return {};
  }
}
