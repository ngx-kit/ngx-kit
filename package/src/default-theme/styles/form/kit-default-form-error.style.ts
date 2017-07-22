import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultFormErrorStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(state: {visible: boolean}): StyleDef {
    const params = this.theme.params;
    const color = this.theme.getColor(params.modules.form.errorColor);
    return {
      display: 'none',
      color: color.border,
      ...this.def.toggle(state.visible, {
        display: 'block',
      }),
    };
  }
}
