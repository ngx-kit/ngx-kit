import { Inject, Injectable } from '@angular/core';
import { KitDefaultThemeService, kitTheme } from '@ngx-kit/ngx-kit';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class DemoStyle implements ComponentStyle {
  constructor(@Inject(kitTheme) private defTheme: KitDefaultThemeService) {
  }

  code(): StyleDef {
    return {};
  }

  demo(state: {
    inverted: boolean;
  }): StyleDef {
    const params = this.defTheme.params;
    return {
      padding: [params.grid.v * 4, params.grid.h * 4],
      background: state.inverted ? params.colors.invert : 'transparent',
    };
  }

  host(): StyleDef {
    const params = this.defTheme.params;
    return {
      display: 'block',
      margin: [params.grid.v * 8, 0],
      boxShadow: `0 0 20px ${params.colors.border}`,
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
    const params = this.defTheme.params;
    return {
      background: 'rgba(0,0,0,.03)',
      padding: [params.grid.v, params.grid.h * 2],
    };
  }

  title(): StyleDef {
    const params = this.defTheme.params;
    return {
      margin: 0,
      padding: [params.grid.v * 2, params.grid.h * 2],
      background: params.colors.border,
    };
  }
}
