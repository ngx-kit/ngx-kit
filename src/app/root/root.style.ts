import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';
import { ThemeService } from '../core/theme.service';

@Injectable()
export class RootStyle implements ComponentStyle {
  constructor(private theme: ThemeService) {
  }

  host(): StyleDef {
    return {
      color: this.theme.params.textColor,
    };
  }

  logo(): StyleDef {
    return {
      width: this.theme.params.sideWidth,
      padding: 0,
      background: this.theme.params.logoColor,
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 600,
      boxSizing: 'border-box',
      textAlign: 'center',
      textTransform: 'uppercase',
      lineHeight: 80,
    };
  }

  menu(): StyleDef {
    return {
      padding: [0, 16],
      flexGrow: 1,
    }
  }

  themeButton(): StyleDef {
    return {
      display: 'flex',
      alignItems: 'center',
      padding: [0, 16],
    }
  }
}
