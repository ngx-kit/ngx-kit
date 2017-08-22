import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
import { applyColorSet } from '../../utils/apply-color-set';
import { applyTypoColorSet } from '../../utils/apply-typo-color-set';

@Injectable()
export class KitDefaultTabsStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  nav(): StyleDef {
    return {
      display: 'flex',
      flexDirection: 'row',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    };
  }

  panel(): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.panels;
    return {
      paddingTop: this.theme.params.grid.h * 2,
      paddingBottom: this.theme.params.grid.h * 2,
      paddingLeft: this.theme.params.grid.v * 2,
      ...applyColorSet({...colors.content, border: colors.border}, params.borders.width),
    };
  }

  tab(state: {active: boolean}): StyleDef {
    const params = this.theme.params;
    const colors = params.colors.panels;
    return {
      cursor: 'pointer',
      userSelect: 'none',
      padding: [params.grid.v, params.grid.h],
      borderTopLeftRadius: params.borders.radius,
      borderTopRightRadius: params.borders.radius,
      borderLeft: [params.borders.width, 'solid', colors.border],
      borderTop: [params.borders.width, 'solid', colors.border],
      ...applyTypoColorSet(colors.title.base),
      $nest: {
        '&:hover': {
          ...applyTypoColorSet(colors.title.hover),
          borderBottom: 0,
        },
        '&:last-child': {
          borderRight: [params.borders.width, 'solid', colors.border],
        },
      },
      ...defToggle(state.active, {
        ...applyTypoColorSet(colors.title.active),
        borderBottom: 0,
        marginBottom: -params.borders.width,
      }),
    };
  }
}
