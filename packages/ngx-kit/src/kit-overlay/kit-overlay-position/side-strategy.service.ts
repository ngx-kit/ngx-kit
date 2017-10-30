import { Injectable } from '@angular/core';
import { KitStyles, StrategyEl, StrategyField } from '../../kit-common/meta';
import { KitOverlayAutofix, KitOverlayPosition } from '../meta';

/**
 * @todo correct handle cases when anchor is not visible
 */
@Injectable()
export class SideStrategyService {
  autofix(el: StrategyEl,
          anchor: StrategyEl,
          field: StrategyField,
          position: KitOverlayPosition,
          autofix: KitOverlayAutofix): null | KitStyles {
    switch (autofix) {
      case 'none':
        return null;
      case 'switch-position':
        switch (position) {
          case 'top':
            if (el.top < 0) {
              return this.reposition(anchor, field, 'bottom');
            }
            break;
          case 'bottom':
            if (el.bottom > field.height) {
              return this.reposition(anchor, field, 'top');
            }
            break;
          case 'left':
            if (el.left < 0) {
              return this.reposition(anchor, field, 'right');
            }
            break;
          case 'right':
            if (el.right > field.width) {
              return this.reposition(anchor, field, 'left');
            }
            break;
        }
    }
    return null;
  }

  reposition(anchor: StrategyEl,
             field: StrategyField,
             position: KitOverlayPosition): KitStyles {
    switch (position) {
      case 'top':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top)}px`,
          left: `${Math.round(anchor.left + anchor.width / 2)}px`,
          transform: 'translateX(-50%) translateY(-100%)',
        };
      case 'bottom':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.bottom)}px`,
          left: `${Math.round(anchor.left + anchor.width / 2)}px`,
          transform: 'translateX(-50%)',
        };
      case 'left':
        console.log('field, anchor', field, anchor);
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top + anchor.width / 2)}px`,
          left: `${Math.round(anchor.left)}px`,
          transform: 'translateX(-100%) translateY(-50%)',
        };
      case 'right':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top + anchor.width / 2)}px`,
          left: `${Math.round(anchor.right)}px`,
          transform: 'translateY(-50%)',
        };
      default:
        throw new Error(`Position ${position} in not correct!`);
    }
  }
}
