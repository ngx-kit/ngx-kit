import { Inject, Injectable } from '@angular/core';
import { KitComponentStyle, kitTheme } from '@ngx-kit/core';
import { StyleDef, StylerColorService, StylerDefService } from '@ngx-kit/styler';
import { KitDefaultThemeService } from '../kit-default-theme.service';

@Injectable()
export class KitDefaultOverlayContainerStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService,) {
  }

  host(state: {type: 'center' | 'dropdown' | 'side', overlay: boolean}): StyleDef {
    return {
      ...this.def.pick(state.type, {
        center: {
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
        },
        dropdown: {},
        side: {},
      }),
      ...this.def.toggle(state.overlay, {
        background: this.color.rgba(0, 0, 0, .7),
      }),
    };
  }
}
