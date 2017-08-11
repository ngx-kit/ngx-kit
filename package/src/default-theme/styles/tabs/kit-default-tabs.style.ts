import { Inject, Injectable } from '@angular/core';
import { defToggle, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultTabsStyle implements KitComponentStyle {
  constructor(@Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  nav(): StyleDef {
    return {
      borderBottom: [1, 'solid', '#d9d9d9'],
      display: 'flex',
      flexDirection: 'row',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    };
  }

  panel(): StyleDef {
    return {
      borderBottom: [1, 'solid', '#d9d9d9'],
      borderRight: [1, 'solid', '#d9d9d9'],
      borderLeft: [1, 'solid', '#d9d9d9'],
      paddingTop: this.theme.params.grid.h * 2,
      paddingBottom: this.theme.params.grid.h * 2,
      paddingLeft: this.theme.params.grid.v * 2,
    };
  }

  tab(state: {active: boolean}): StyleDef {
    return {
      cursor: 'pointer',
      userSelect: 'none',
      padding: '8px',
      ...defToggle(state.active, {
        background: '#ffffff',
        borderTop: [1, 'solid', '#d9d9d9'],
        borderRight: [1, 'solid', '#d9d9d9'],
        borderLeft: [1, 'solid', '#d9d9d9'],
        marginBottom: -1,
      }),
    }
  }
}
