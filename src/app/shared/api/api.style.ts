import { Inject, Injectable } from '@angular/core';
import { ComponentStyle, mix, StyleDef } from '@ngx-kit/styler';
import { UiDefaultThemeService } from '@ngx-kit/ui-default';

@Injectable()
export class ApiStyle implements ComponentStyle {
  constructor(private defTheme: UiDefaultThemeService) {
  }

  head(): StyleDef {
    return {
      borderBottom: [1, 'solid', '#ddd'],
      paddingBottom: 4,
    };
  }

  host(): StyleDef {
    return {
      display: 'block',
      marginBottom: 32,
    };
  }

  methodCode(): StyleDef {
    const params = this.defTheme.params;
    return {
      background: mix(.9, params.colors.background, params.colors.invert),
      padding: [params.grid.v, params.grid.h],
      borderRadius: params.borders.radius,
    };
  }

  paramDoc(): StyleDef {
    return {
      $nest: {
        '& p': {
          margin: 0,
        },
      },
    };
  }
}
