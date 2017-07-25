import { Inject, Injectable } from '@angular/core';
import { KitDefaultThemeService, kitTheme } from '@ngx-kit/ngx-kit';
import { ComponentStyle, StyleDef, StylerDefService } from '@ngx-kit/styler';

@Injectable()
export class LoadingBarStyle implements ComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private kitTheme: KitDefaultThemeService) {
  }

  holder(): StyleDef {
    return {
      position: 'relative',
      background: '#eee',
      height: 50,
      marginBottom: this.kitTheme.params.grid.v * 2,
    };
  }

  host(): StyleDef {
    return {};
  }
}
