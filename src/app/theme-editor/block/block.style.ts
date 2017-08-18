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
      padding: [8, 4, 8, 8],
      background: 'rgba(0,0,0,.09)',
    };
  }

  name(): StyleDef {
    return {
      cursor: 'pointer',
      margin: [4, 0],
    }
  }
}
