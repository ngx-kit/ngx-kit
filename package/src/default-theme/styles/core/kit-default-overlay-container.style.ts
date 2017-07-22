import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerColorService, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultOverlayContainerStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              private color: StylerColorService,
              @Inject(kitTheme) private theme: KitDefaultThemeService,) {
  }

  host(state: {type: 'center' | 'dropdown' | 'side', opened: boolean}): StyleDef {
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
      ...this.def.toggle(!state.opened, {
        display: 'none',
      }),
    };
  }

  overlay(): StyleDef {
    return {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: this.color.rgba(0, 0, 0, .7),
      zIndex: 10001,
    }
  }

  holder(): StyleDef {
    return {
      zIndex: 10002,
    }
  }
}
