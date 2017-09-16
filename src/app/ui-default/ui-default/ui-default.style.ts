import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';
import { UiDefaultThemeService } from '@ngx-kit/ui-default';
import { ThemeService } from '../../core/theme.service';

@Injectable()
export class UiDefaultStyle implements ComponentStyle {
  constructor(private theme: ThemeService,
              private defTheme: UiDefaultThemeService) {
  }

  githubStar(): StyleDef {
    return {
      display: 'flex',
      alignItems: 'center',
      padding: [0, 64],
    };
  }

  layoutContent(): StyleDef {
    const params = this.defTheme.params;
    return {
      background: params.colors.background,
      color: params.colors.invert,
      overflowY: 'auto',
    }
  }

  layoutSide(): StyleDef {
    return {
      background: this.theme.params.sideColor,
      padding: 8,
      boxSizing: 'border-box',
      overflowY: 'auto',
    };
  }

  logo(): StyleDef {
    return {
      width: this.theme.params.sideWidth,
      padding: 0,
      background: 'linear-gradient(135deg, #2B6DB7 0%,#155096 100%)',
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
