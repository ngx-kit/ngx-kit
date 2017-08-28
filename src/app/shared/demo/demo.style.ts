import { Inject, Injectable } from '@angular/core';
import { KitDefaultThemeService, kitTheme } from '@ngx-kit/ngx-kit';
import { ComponentStyle, mix, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class DemoStyle implements ComponentStyle {
  constructor(@Inject(kitTheme) private defTheme: KitDefaultThemeService) {
  }

  code(): StyleDef {
    return {};
  }

  demo(): StyleDef {
    const params = this.defTheme.params;
    return {
      padding: [params.grid.v * 4, params.grid.h * 4],
    };
  }

  host(): StyleDef {
    const params = this.defTheme.params;
    return {
      display: 'block',
      border: [params.borders.width, 'solid', mix(.8, params.colors.border, params.colors.invert)],
      margin: [32, 0],
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
