import { Inject, Injectable } from '@angular/core';
import { KitDefaultThemeService, kitTheme } from '@ngx-kit/ngx-kit';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';
import { ThemeService } from '../../core/theme.service';

@Injectable()
export class KitStyle implements ComponentStyle {
  constructor(private theme: ThemeService,
              @Inject(kitTheme) private defTheme: KitDefaultThemeService) {
  }

  layoutContent(): StyleDef {
    const params = this.defTheme.params;
    return {
      background: params.colors.background,
      color: params.colors.invert,
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
