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
      overflow: 'hidden',
    };
  }

  layoutContentWrapper(): StyleDef {
    return {
      maxWidth: 1000,
      flexGrow: 1,
    };
  }

  layoutFooter(): StyleDef {
    return {
      height: 50,
      flexShrink: 0,
      lineHeight: 50,
      background: this.theme.params.headerColor,
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
      height: 50,
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
    return {
      width: this.theme.params.sideWidth,
      overflow: 'hidden',
    };
  }
}
