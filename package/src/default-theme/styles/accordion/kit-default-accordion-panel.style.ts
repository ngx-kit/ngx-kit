import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet, BORDER_TOP } from '../../utils/apply-color-set';

@Injectable()
export class KitDefaultAccordionPanelStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  content(): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.panels;
    return {
      padding: [params.grid.v * 2, params.grid.h * 3],
      ...applyColorSet({...colors.content, border: colors.border}, params.borders.width, BORDER_TOP),
    };
  }

  host(): StyleDef {
    const params = this.theme.params;
    return {
      borderBottomWidth: 0,
      display: 'block',
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
    const params = this.theme.params;
    const colors = params.colors.panels;
    return {
      cursor: 'pointer',
      height: params.grid.v * 4,
      lineHeight: params.grid.h * 4,
      paddingLeft: params.grid.v * 3,
      userSelect: 'none',
      ...applyColorSet({...colors.title.base, border: colors.border}, params.borders.width, BORDER_TOP),
      ...defToggle(state.active, {
        ...applyColorSet({...colors.title.active, border: colors.border}, params.borders.width, BORDER_TOP),
      }, {
        $nest: {
          '&:hover': {
            ...applyColorSet({...colors.title.hover, border: colors.border}, params.borders.width, BORDER_TOP),
          },
        },
      }),
    };
  }
}
