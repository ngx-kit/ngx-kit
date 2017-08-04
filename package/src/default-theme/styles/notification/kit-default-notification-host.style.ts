import { Inject, Injectable } from '@angular/core';
import { StyleDef, StylerDefService } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../../core/meta/component';
import { KitCoreOverlayContainerPositionCorner } from '../../../core/meta/overlay';
import { kitTheme } from '../../../core/meta/tokens';
import { KitDefaultThemeService } from '../../kit-default-theme.service';

@Injectable()
export class KitDefaultNotificationHostStyle implements KitComponentStyle {
  constructor(private def: StylerDefService,
              @Inject(kitTheme) private theme: KitDefaultThemeService) {
  }

  host(): StyleDef {
    return {};
  }

  item(): StyleDef {
    const params = this.theme.params;
    return {
      margin: [params.grid.v, params.grid.h],
      padding: [params.grid.v, params.grid.h],
      background: 'rgba(0,0,0,.7)',
      borderRadius: params.borders.radius.m,
    };
  }

  itemMessage(): StyleDef {
    return {
      color: 'rgba(255, 255, 255, .9)',
    };
  }

  itemTitle(): StyleDef {
    return {
      fontSize: '1.2rem',
      color: '#fff',
    };
  }

  wrapper(state: {
    position: KitCoreOverlayContainerPositionCorner;
  }): StyleDef {
    return {
      display: 'flex',
      alignItems: 'flex-end',
      ...this.def.pick(state.position, {
        'top-right': {
          flexDirection: 'column',
        },
        'bottom-right': {
          flexDirection: 'column-reverse',
        },
        'bottom-left': {
          flexDirection: 'column-reverse',
        },
        'top-left': {
          flexDirection: 'column',
        },
      }),
    };
  }
}
