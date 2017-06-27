import { Inject, Injectable } from '@angular/core';
import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultLayoutContentStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {
      display: 'flex',
      flexGrow: 1,
      overflow: 'auto',
    };
  }
}
