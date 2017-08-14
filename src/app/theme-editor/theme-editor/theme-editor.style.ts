import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';
import { ThemeService } from '../../core/theme.service';

@Injectable()
export class ThemeEditorStyle implements ComponentStyle {
  constructor(private theme: ThemeService) {
  }

  container(): StyleDef {
    return {
      flexGrow: 1,
      maxWidth: 1000,
    };
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

  overviewColorBox(): StyleDef {
    return {
      cursor: 'pointer',
      display: 'block',
      $nest: {
        '& input': {
          background: 'transparent',
          color: '#fff',
          textShadow: '2px 0 1px #555',
        },
      },
    };
  }

  side(): StyleDef {
    return {
      width: this.theme.params.sideWidth,
      background: this.theme.params.sideColor,
      padding: 8,
      boxSizing: 'border-box',
      overflowY: 'scroll',
    };
  }
}
