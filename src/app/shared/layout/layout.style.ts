import { Inject, Injectable } from '@angular/core';
import { KitDefaultThemeService, kitTheme } from '@ngx-kit/ngx-kit';
import { StyleDef } from '@ngx-kit/styler';
import { ThemeService } from '../../core/theme.service';

@Injectable()
export class LayoutStyle {
  constructor(private theme: ThemeService,
              @Inject(kitTheme) private defTheme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      overflow: 'hidden',
    };
  }

  layoutContent(): StyleDef {
    return {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      overflow: 'hidden',
    };
  }

  layoutContentWrapper(): StyleDef {
    const params = this.defTheme.params;
    return {
      flexGrow: 1,
      padding: [0, params.grid.v * 8],
    };
  }

  layoutFooter(): StyleDef {
    return {
      display: 'block',
      flexShrink: 0,
      lineHeight: 50,
      background: this.theme.params.footerColor,
    };
  }

  layoutFull(): StyleDef {
    return {
      ...this.host(),
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflow: 'hidden',
    };
  }

  layoutHeader(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      flexShrink: 0,
      height: 80,
      background: this.theme.params.headerColor,
    };
  }

  layoutRow(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      overflow: 'hidden',
    }
  }

  layoutSide(): StyleDef {
    const params = this.defTheme.params;
    return {
      width: this.theme.params.sideWidth,
      padding: [params.grid.v * 2, params.grid.h],
      overflow: 'hidden',
      fontSize: '.95rem',
      color: params.colors.background,
    };
  }
}
