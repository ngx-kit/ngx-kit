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
    return {
      display: 'none',
      color: params.moduleForm.colors.error.text,
      ...this.def.toggle(state.visible, {
        display: 'block',
      }),
    };
  }
}
