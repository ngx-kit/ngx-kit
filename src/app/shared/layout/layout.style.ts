import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { UiDefaultThemeService } from '@ngx-kit/ui-default';
import { ThemeService } from '../../core/theme.service';

@Injectable()
export class LayoutStyle {
  constructor(private theme: ThemeService,
              private defTheme: UiDefaultThemeService) {
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
      padding: [params.grid.h * 2, params.grid.v * 8],
//      boxShadow: 'inset 0px 0px 39px -10px rgba(0,0,0,.1)',
    };
  }

  layoutFooter(): StyleDef {
    const params = this.defTheme.params;
    return {
      display: 'block',
      flexShrink: 0,
      background: this.theme.params.footerColor,
      padding: [params.grid.v * 4, params.grid.h * 8],
      textAlign: 'right',
      boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.1)',
      zIndex: 2,
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
      boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.1)',
      zIndex: 2,
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
      flexShrink: 0,
      $media: [
        [{maxWidth: 600}, {
          display: 'none',
        }],
      ],
    };
  }
}
