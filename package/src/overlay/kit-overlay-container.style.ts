import { Injectable } from '@angular/core';
import { defPick, defToggle, StyleDef } from '@ngx-kit/styler';
import { KitCoreOverlayContainerPosition, KitCoreOverlayContainerType } from './meta';

@Injectable()
export class KitCoreOverlayContainerStyle {
  holder(): StyleDef {
    return {
      zIndex: 10002,
    }
  }

  host(state: {
    type: KitCoreOverlayContainerType;
    position: KitCoreOverlayContainerPosition;
    opened: boolean;
  }): StyleDef {
    return {
      ...defPick(state.type, {
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
        fixedSide: {
          position: 'fixed',
          zIndex: 10000,
          ...defPick(state.position, {
            'top-right': {
              top: 0,
              right: 0,
            },
            'bottom-right': {
              bottom: 0,
              right: 0,
            },
            'bottom-left': {
              bottom: 0,
              left: 0,
            },
            'top-left': {
              top: 0,
              left: 0,
            },
          }),
        },
        dropdown: {},
        side: {},
      }),
      ...defToggle(!state.opened, {
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
      background: 'rgba(0, 0, 0, .7)',
      zIndex: 10001,
    }
  }
}
