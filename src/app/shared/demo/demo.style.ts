import { Injectable } from '@angular/core';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class DemoStyle implements ComponentStyle {
  code(): StyleDef {
    return {};
  }

  codeSrc(): StyleDef {
    return {
      padding: 16,
    }
  }

  demo(state: {
    inverted: boolean;
  }): StyleDef {
    return {
      padding: [32, 32],
    };
  }

  host(): StyleDef {
    return {
      display: 'block',
      marginBottom: 64,
      boxShadow: `0 0 20px #eee`,
      borderRadius: 4,
      overflow: 'hidden',
      $nest: {
        '& .kit-tabs__panel': {
          border: 0,
        },
      },
    };
  }

  readme(): StyleDef {
    return {
      background: 'rgba(0,0,0,.03)',
      padding: [8, 16],
    };
  }

  title(): StyleDef {
    return {
      margin: 0,
      padding: [16, 16],
      background: '#eee',
    };
  }
}
