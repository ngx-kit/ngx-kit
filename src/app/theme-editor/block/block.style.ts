import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class BlockStyle implements ComponentStyle {
  constructor() {
  }

  host(): StyleDef {
    return {};
  }

  inner(): StyleDef {
    return {
      display: 'block',
      paddingLeft: 16,
    };
  }

  name(): StyleDef {
    return {
      cursor: 'pointer',
      margin: [4, 0],
    }
  }
}
