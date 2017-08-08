import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef, StylerDefService } from '@ngx-kit/styler';

@Injectable()
export class BlockStyle implements ComponentStyle {
  constructor(private def: StylerDefService) {
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
      margin: [4, 0],
    }
  }
}
