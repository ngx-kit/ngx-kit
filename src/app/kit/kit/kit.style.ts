import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';
import { ThemeService } from '../../core/theme.service';

@Injectable()
export class KitStyle implements ComponentStyle {
  constructor(private theme: ThemeService) {
  }

  githubStar(): StyleDef {
    return {
      display: 'flex',
      alignItems: 'center',
      padding: [0, 64],
      $nest: {
        '& kit-icon': {
          width: 30,
          height: 30,
        },
      },
    };
  }

  layoutContent(): StyleDef {
    return {
//      background: params.colors.background,
//      color: params.colors.invert,
      overflowY: 'auto',
    }
  }

  layoutSide(): StyleDef {
    return {
      background: this.theme.params.sideColor,
      padding: 8,
      boxSizing: 'border-box',
      overflowY: 'auto',
      color: '#fff',
    };
  }

  logo(): StyleDef {
    return {
      width: this.theme.params.sideWidth,
      padding: 0,
      background: 'linear-gradient(135deg, #0FD8DF 0%, #0fbac1 100%)',
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
      alignItems: 'center',
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'row',
      listStyle: 'none',
      padding: [0, 64],
    }
  }

  menuLink(): StyleDef {
    return {
      color: '#444',
      padding: 8,
    };
  }
}
