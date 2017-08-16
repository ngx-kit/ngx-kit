import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';

@Injectable()
export class KitDefaultAccordionPanelStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  content(): StyleDef {
    return {
      padding: [this.theme.params.grid.v * 2, this.theme.params.grid.h * 3],
      ...applyTypoColorSet(this.theme.params.moduleAccordion.colors.content),
    };
  }

  host(): StyleDef {
    const params = this.theme.params;
    return {
      border: [params.borders.width, 'solid', this.theme.params.moduleAccordion.colors.border],
      borderBottomWidth: 0,
      display: 'block',
      ...applyTypoColorSet(this.theme.params.moduleAccordion.colors.title),
      $nest: {
        '&:first-child': {
          borderTopLeftRadius: params.borders.radius,
          borderTopRightRadius: params.borders.radius,
        },
        '&:last-child': {
          borderBottomWidth: params.borders.width,
          borderBottomRightRadius: params.borders.radius,
          borderBottomLeftRadius: params.borders.radius,
        },
      },
    };
  }

  title(state: {active: boolean}): StyleDef {
    return {
      cursor: 'pointer',
      height: this.theme.params.grid.v * 4,
      lineHeight: this.theme.params.grid.h * 4,
      paddingLeft: this.theme.params.grid.v * 3,
      userSelect: 'none',
      ...defToggle(state.active, {}),
    };
  }
}
