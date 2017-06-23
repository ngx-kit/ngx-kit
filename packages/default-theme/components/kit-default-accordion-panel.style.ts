import { Inject, Injectable } from '@angular/core';

import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';

import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultAccordionPanelStyle implements KitComponentStyle {

  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  title(state: {active: boolean}): StyleDef {
    return {
      ...this.def.toggle(state.active, {
        fontWeight: 600,
      }),
    };
  }

  content(): StyleDef {
    return {};
  }

}
