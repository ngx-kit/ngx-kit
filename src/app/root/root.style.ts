import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef, StylerDefService } from '@ngx-kit/styler';

import { ThemeService } from '../core/theme.service';

@Injectable()
export class RootStyle implements ComponentStyle {

  constructor(private def: StylerDefService,
              private theme: ThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  header(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      background: '#eee',
    };
  }

  logo(): StyleDef {
    return {
      width: this.theme.sideWidth,
      padding: 16,
      background: '#0DD8DF',
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 600,
      boxSizing: 'border-box',
    };
  }

  menu(): StyleDef {
    return {
      padding: [0, 16],
    }
  }

  footer(): StyleDef {
    return {
      background: '#ddd',
      padding: 16,
    };
  }

}
