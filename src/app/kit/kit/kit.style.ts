import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef, StylerDefService } from '@ngx-kit/styler';
import { ThemeService } from '../../core/theme.service';

@Injectable()
export class KitStyle implements ComponentStyle {
  constructor(private def: StylerDefService,
              private theme: ThemeService) {
  }

  content(): StyleDef {
    return {
      padding: 16,
      justifyContent: 'center',
      background: this.theme.params.contentColor,
    }
  }

  host(): StyleDef {
    return {
      display: 'flex',
      flexGrow: 1,
    };
  }

  layout(): StyleDef {
    return {
      flexGrow: 1,
    }
  }

  side(): StyleDef {
    return {
      width: this.theme.params.sideWidth,
      background: this.theme.params.sideColor,
      padding: 8,
      boxSizing: 'border-box',
    };
  }

  typoContainer(): StyleDef {
    return {
      flexGrow: 1,
      maxWidth: 1000,
    };
  }
}
