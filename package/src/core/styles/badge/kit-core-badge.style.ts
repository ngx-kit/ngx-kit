import { Injectable } from '@angular/core';
import { defPick, StyleDef } from '@ngx-kit/styler';
import { KitBadgePosition } from '../../../badge/meta';
import { KitComponentStyle } from '../../meta/component';

@Injectable()
export class KitCoreBadgeStyle implements KitComponentStyle {
  host(state: {
    position: KitBadgePosition,
  }): StyleDef {
    return {
      minWidth: 1,
      textAlign: 'center',
      lineHeight: '1',
      ...defPick(state.position, {
        inline: {
          display: 'inline-block',
        },
        'top-right': {
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 0,
          transform: 'translate(50%, -50%)',
        },
        'bottom-right': {
          display: 'block',
          position: 'absolute',
          bottom: 0,
          right: 0,
          transform: 'translate(50%, 50%)',
        },
        'bottom-left': {
          display: 'block',
          position: 'absolute',
          bottom: 0,
          left: 0,
          transform: 'translate(-50%, 50%)',
        },
        'top-left': {
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
        },
      }, 'inline'),
    };
  }
}
