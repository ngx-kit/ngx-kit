import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultColorPickerPopupStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  popup(): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.modals;
    return {
      padding: [params.grid.v, params.grid.h],
      boxShadow: params.shadows.deep,
      borderRadius: params.borders.radius,
      ...applyColorSet(colors.modal, params.borders.width),
    };
  }
}
