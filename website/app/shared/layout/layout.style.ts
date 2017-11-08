import { Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { ThemeService } from '../../core/theme.service';

@Injectable()
export class LayoutStyle {
  constructor(private theme: ThemeService) {
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
    return {
      flexGrow: 1,
      padding: [16, 64],
      boxShadow: 'inset 0px 0px 39px -10px rgba(0,0,0,.1)',
    };
  }

  layoutFooter(): StyleDef {
    return {
      display: 'block',
      flexShrink: 0,
      background: this.theme.params.footerColor,
      padding: [32, 64],
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
    return {
      width: this.theme.params.sideWidth,
      padding: [16, 8],
      overflow: 'hidden',
      fontSize: '.95rem',
      flexShrink: 0,
      $media: [
        [{maxWidth: 600}, {
          display: 'none',
        }],
      ],
    };
  }
}
