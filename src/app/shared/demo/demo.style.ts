import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class DemoStyle implements ComponentStyle {
  constructor() {
  }

  code(): StyleDef {
    return {};
  }

  demo(): StyleDef {
    return {
      padding: [8, 0],
    };
  }

  host(): StyleDef {
    return {
      display: 'block',
      padding: [8, 0],
      $nest: {
        '&:last-child': {
          borderBottom: 0,
        },
      },
    };
  }

  readme(): StyleDef {
    return {};
  }
}
