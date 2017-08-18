import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';
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
    return {
      border: [params.borders.width, 'solid', params.moduleTabs.colors.panel.border],
      paddingTop: this.theme.params.grid.h * 2,
      paddingBottom: this.theme.params.grid.h * 2,
      paddingLeft: this.theme.params.grid.v * 2,
      ...applyTypoColorSet(params.moduleTabs.colors.panel),
    };
  }

  tab(state: {active: boolean}): StyleDef {
    const params = this.theme.params;
    return {
      cursor: 'pointer',
      userSelect: 'none',
      padding: [params.grid.v, params.grid.h],
      border: [params.borders.width, 'solid', params.moduleTabs.colors.nav.base.border],
      borderTopLeftRadius: params.borders.radius,
      borderTopRightRadius: params.borders.radius,
      borderBottom: 0,
      ...applyTypoColorSet(params.moduleTabs.colors.nav.base),
      $nest: {
        '&:hover': {
          background: params.moduleTabs.colors.nav.hover.background,
          border: [params.borders.width, 'solid', params.moduleTabs.colors.nav.hover.border],
          borderBottom: 0,
        },
      },
      ...defToggle(state.active, {
        background: params.moduleTabs.colors.nav.active.background,
        border: [params.borders.width, 'solid', params.moduleTabs.colors.nav.active.border],
        borderBottom: 0,
        marginBottom: -params.borders.width,
      }),
    };
  }
}
