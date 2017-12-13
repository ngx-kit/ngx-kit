import { Injectable } from '@angular/core';
import { KitStyles } from '../../kit-style/meta';
import { KitOverlayAutofix, KitOverlayPosition, positionPairs, StrategyEl, StrategyField } from '../meta';

/**
 * @todo correct handle cases when anchor is not visible
 *
 * @internal
 */
@Injectable()
export class DropdownStrategyService {
  autofix(
    el: StrategyEl,
    anchor: StrategyEl,
    field: StrategyField,
    position: KitOverlayPosition,
    autofix: KitOverlayAutofix,
  ): null | {position: KitOverlayPosition, styles: KitStyles} {
    switch (autofix) {
      case 'none':
        return null;
      case 'switch-position':
        const outs: string[] = [];
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
        if (outs.length > 0) {
          const procPosition = position === 'left' ? 'left-bottom' : position === 'right' ? 'right-bottom' : position;
          const positionChunks = procPosition.split('-');
          const newPositionChunks = positionChunks.map(chunk => {
            if (outs.indexOf(chunk) !== -1) {
              return positionPairs[chunk];
            } else {
              return chunk;
            }
          });
          if (newPositionChunks.length > 0) {
            const newPosition = newPositionChunks.join('-') as KitOverlayPosition;
            return {
              position: newPosition,
              styles: this.reposition(anchor, field, newPosition),
            };
          }
        }
    }
    return null;
  }

  reposition(
    anchor: StrategyEl,
    field: StrategyField,
    position: KitOverlayPosition,
  ): KitStyles {
    switch (position) {
      case 'top':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top)}px`,
          left: `${Math.round(anchor.left)}px`,
          transform: 'translateY(-100%)',
          width: `${Math.round(anchor.width)}px`,
          overflowY: 'auto',
        };
      case 'top-left':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top)}px`,
          left: `${Math.round(anchor.right)}px`,
          transform: 'translateY(-100%) translateX(-100%)',
          overflowY: 'auto',
        };
      case 'top-right':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top)}px`,
          left: `${Math.round(anchor.left)}px`,
          transform: 'translateY(-100%)',
          overflowY: 'auto',
        };
      case 'bottom':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top + anchor.height)}px`,
          left: `${Math.round(anchor.left)}px`,
          width: `${Math.round(anchor.width)}px`,
          overflowY: 'auto',
        };
      case 'bottom-left':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top + anchor.height)}px`,
          left: `${Math.round(anchor.right)}px`,
          transform: `translateX(-100%)`,
          overflowY: 'auto',
        };
      case 'bottom-right':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top + anchor.height)}px`,
          left: `${Math.round(anchor.left)}px`,
          overflowY: 'auto',
        };
      case 'left':
      case 'left-bottom':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top)}px`,
          left: `${Math.round(anchor.left)}px`,
          transform: 'translateX(-100%)',
        };
      case 'left-top':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.bottom)}px`,
          left: `${Math.round(anchor.left)}px`,
          transform: 'translateX(-100%) translateY(-100%)',
        };
      case 'right':
      case 'right-bottom':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top)}px`,
          left: `${Math.round(anchor.right)}px`,
        };
      case 'right-top':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.bottom)}px`,
          left: `${Math.round(anchor.right)}px`,
          transform: 'translateY(-100%)',
        };
      default:
        throw new Error(`Position ${position} in not correct!`);
    }
  }
}
