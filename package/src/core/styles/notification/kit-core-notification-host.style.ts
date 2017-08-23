import { Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitComponentStyle } from '../../meta/component';
import { KitCoreOverlayContainerPositionCorner } from '../../meta/overlay';

@Injectable()
export class KitCoreNotificationHostStyle implements KitComponentStyle {
  host(): StyleDef {
    return {};
  }

  item(): StyleDef {
    return {};
  }

  itemMessage(): StyleDef {
    return {};
  }

  itemTitle(): StyleDef {
    return {};
  }

  wrapper(state: {
    position: KitCoreOverlayContainerPositionCorner;
  }): StyleDef {
    return {
      display: 'flex',
      ...defPick(state.position, {
        'top-right': {
          flexDirection: 'column',
          alignItems: 'flex-end',
        },
        'bottom-right': {
          flexDirection: 'column-reverse',
          alignItems: 'flex-end',
        },
        'bottom-left': {
          flexDirection: 'column-reverse',
          alignItems: 'flex-start',
        },
        'top-left': {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
      }),
    };
  }
}
