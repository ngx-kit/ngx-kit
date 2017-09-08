import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class KitSlideHostStyle implements ComponentStyle {
  constructor() {
  }

  host(): StyleDef {
    return {
      display: 'block',
      position: 'relative',
      overflow: 'hidden',
    };
  }
}
