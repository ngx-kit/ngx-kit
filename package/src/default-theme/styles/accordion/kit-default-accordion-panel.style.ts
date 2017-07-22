import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultAccordionPanelStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  content(): StyleDef {
    return {
      padding: [this.theme.params.grid.v * 2, this.theme.params.grid.h * 3],
      backgroundColor: '#ffffff',
    };
  }

  host(): StyleDef {
    return {
      backgroundColor: '#f7f7f7',
      border: [1, 'solid', '#d9d9d9'],
      borderBottomWidth: 0,
      display: 'block',
      $nest: {
        '&:last-child': {
          borderBottomWidth: 1,
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
      ...this.def.toggle(state.active, {}),
    };
  }
}
