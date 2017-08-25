import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class LoadingBarStyle implements ComponentStyle {
  constructor() {
  }

  holder(): StyleDef {
    return {
      position: 'relative',
      background: '#eee',
      height: 50,
      marginBottom: 16,
    };
  }

  host(): StyleDef {
    return {};
  }
}
