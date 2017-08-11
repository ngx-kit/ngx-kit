import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class ColorsBlockStyle implements ComponentStyle {
  constructor() {
  }

  box(): StyleDef {
    return {
      color: '#fff',
      cursor: 'pointer',
      display: 'inline-block',
      padding: [1, 4],
      textShadow: '2px 0 1px #555',
    };
  }

  host(): StyleDef {
    return {};
  }
}
