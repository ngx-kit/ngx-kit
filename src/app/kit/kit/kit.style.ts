import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';
import { ThemeService } from '../../core/theme.service';

@Injectable()
export class KitStyle implements ComponentStyle {
  constructor(private theme: ThemeService) {
  }

  layoutContent(): StyleDef {
    return {
      padding: 16,
      justifyContent: 'center',
      background: this.theme.params.contentColor,
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

  typoContainer(): StyleDef {
    return {
      flexGrow: 1,
      maxWidth: 1000,
    };
  }
}
