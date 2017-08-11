import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultColorPickerPopupStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  popup(): StyleDef {
    const params = this.theme.params;
    return {
      padding: [params.grid.v, params.grid.h],
      background: params.moduleColorPicker.colors.popup.background,
      border: [1, 'solid', params.moduleColorPicker.colors.popup.border],
      boxShadow: params.shadows.deep,
      borderRadius: params.borders.radius.m,
      color: params.moduleColorPicker.colors.popup.text,
    };
  }
}
