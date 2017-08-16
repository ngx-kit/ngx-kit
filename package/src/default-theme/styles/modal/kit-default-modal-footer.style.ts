import { Inject, Injectable } from '@angular/core';
import { StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';

@Injectable()
export class KitDefaultModalFooterStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    const params = this.theme.params;
    return {
      display: 'block',
      borderBottomRightRadius: params.borders.radius * 2,
      borderBottomLeftRadius: params.borders.radius * 2,
      padding: [params.grid.v * 2, params.grid.h * 4],
      textAlign: 'right',
      borderTop: [params.borders.width, 'solid', params.moduleModal.colors.footer.border],
      ...applyTypoColorSet(params.moduleModal.colors.footer),
    };
  }
}
