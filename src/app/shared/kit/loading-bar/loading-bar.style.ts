import { Inject, Injectable } from '@angular/core';
import { KitDefaultThemeService, kitTheme } from '@ngx-kit/ngx-kit';
import { ComponentStyle, StyleDef } from '@ngx-kit/styler';

@Injectable()
export class LoadingBarStyle implements ComponentStyle {
  constructor(@Inject(kitTheme) private kitThemeService: KitDefaultThemeService) {
  }

  holder(): StyleDef {
    return {
      position: 'relative',
      background: '#eee',
      height: 50,
      marginBottom: this.kitThemeService.params.grid.v * 2,
    };
  }

  host(): StyleDef {
    return {};
  }
}
