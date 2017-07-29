import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerColorService, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultAccordionPanelStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService,
            private color: StylerColorService) {
  }

  content(): StyleDef {
    const color = this.theme.getColor(this.theme.params.modules.accordion.color);
    return {
      padding: [this.theme.params.grid.v * 2, this.theme.params.grid.h * 3],
      backgroundColor: this.color.lighten(.05, color.background),
      color: color.text,
    };
  }

  host(): StyleDef {
    const color = this.theme.getColor(this.theme.params.modules.accordion.color);
    return {
      backgroundColor: color.background,
      border: [1, 'solid', color.border],
      borderBottomWidth: 0,
      color: color.text,
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
      userSelect: 'none',
      ...this.def.toggle(state.active, {}),
    };
  }
}
