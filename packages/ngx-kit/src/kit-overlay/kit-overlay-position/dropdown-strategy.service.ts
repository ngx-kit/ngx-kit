import { Injectable } from '@angular/core';
import { KitStyles, StrategyEl, StrategyField } from '../../kit-common/meta';
import { KitOverlayAutofix, KitOverlayDropdownWidth, KitOverlayPosition, positionPairs } from '../meta';

/**
 * @todo correct handle cases when anchor is not visible
 */
@Injectable()
export class DropdownStrategyService {
  autofix(el: StrategyEl,
          anchor: StrategyEl,
          field: StrategyField,
          position: KitOverlayPosition,
          width: KitOverlayDropdownWidth,
          autofix: KitOverlayAutofix): null | KitStyles {
    switch (autofix) {
      case 'none':
        return null;
      case 'switch-position':
        const outs = [];
        if (el.top < 0) {
          outs.push('top');
        }
        if (el.bottom > field.height) {
          outs.push('bottom');
        }
        if (el.left < 0) {
          outs.push('left');
        }
        if (el.right > field.width) {
          outs.push('right');
        }
        console.log('outs', outs);
        if (outs.length === 1 && outs.indexOf(position) !== -1) {
          console.log('rep', outs, positionPairs[position]);
          return this.reposition(anchor, field, positionPairs[position], width);
        }
    }
    return null;
  }

  reposition(anchor: StrategyEl,
             field: StrategyField,
             position: KitOverlayPosition,
             width: KitOverlayDropdownWidth): KitStyles {
    switch (position) {
      case 'top':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top)}px`,
          left: `${Math.round(anchor.left)}px`,
          transform: 'translateY(-100%)',
          width: width === 'full' ? `${Math.round(anchor.width)}px` : 'auto',
          overflowY: 'auto',
        };
      case 'bottom':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top + anchor.height)}px`,
          left: `${Math.round(anchor.left)}px`,
          width: width === 'full' ? `${Math.round(anchor.width)}px` : 'auto',
          overflowY: 'auto',
        };
      case 'left':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top)}px`,
          left: `${Math.round(anchor.left)}px`,
          transform: 'translateX(-100%)',
        };
      case 'right':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top)}px`,
          left: `${Math.round(anchor.right)}px`,
        };
      default:
        throw new Error(`Position ${position} in not correct!`);
    }
  }
}
