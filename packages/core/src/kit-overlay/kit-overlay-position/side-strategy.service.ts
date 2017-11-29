import { Injectable } from '@angular/core';
import { KitOverlayAutofix, KitOverlayPosition, StrategyEl, StrategyField } from '../meta';
import { KitStyles } from '../../kit-style/meta';

/**
 * @todo correct handle cases when anchor is not visible
 */
@Injectable()
export class SideStrategyService {
  autofix(el: StrategyEl,
          anchor: StrategyEl,
          field: StrategyField,
          position: KitOverlayPosition,
          autofix: KitOverlayAutofix): null | {position: KitOverlayPosition, styles: KitStyles} {
    switch (autofix) {
      case 'none':
        return null;
      case 'switch-position':
        const diff: [number, number] = [0, 0];
        if (el.top < 0) {
          diff[0] = 1;
        }
        if (el.bottom > field.height) {
          diff[0] = -1;
        }
        if (el.left < 0) {
          diff[1] = 1;
        }
        if (el.right > field.width) {
          diff[1] = -1;
        }
        if (diff[0] !== 0 || diff[1] !== 0) {
          const xy = this.positionToXy(position);
          const newPosition = this.xyToPosition(this.moveXy(xy, diff));
          return {
            position: newPosition,
            styles: this.reposition(anchor, field, newPosition),
          };
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
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top + anchor.height / 2)}px`,
          left: `${Math.round(anchor.left)}px`,
          transform: 'translateX(-100%) translateY(-50%)',
        };
      case 'right':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top + anchor.height / 2)}px`,
          left: `${Math.round(anchor.right)}px`,
          transform: 'translateY(-50%)',
        };
      case 'top-right':
      case 'right-top':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top)}px`,
          left: `${Math.round(anchor.right)}px`,
          transform: 'translateY(-100%)',
        };
      case 'top-left':
      case 'left-top':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.top)}px`,
          left: `${Math.round(anchor.left)}px`,
          transform: 'translateY(-100%) translateX(-100%)',
        };
      case 'bottom-right':
      case 'right-bottom':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.bottom)}px`,
          left: `${Math.round(anchor.right)}px`,
        };
      case 'bottom-left':
      case 'left-bottom':
        return {
          position: 'fixed',
          top: `${Math.round(anchor.bottom)}px`,
          left: `${Math.round(anchor.left)}px`,
          transform: 'translateX(-100%)',
        };
      default:
        throw new Error(`Position ${position} in not correct!`);
    }
  }

  private moveXy(xy: [number, number], diff: [number, number]): [number, number] {
    const newXy: [number, number] = [xy[0] + diff[0], xy[1] + diff[1]];
    if (newXy[0] < 0) {
      newXy[0] = 0;
    }
    if (newXy[0] > 2) {
      newXy[0] = 2;
    }
    if (newXy[1] < 0) {
      newXy[1] = 0;
    }
    if (newXy[1] > 2) {
      newXy[1] = 2;
    }
    if (newXy[0] === 1 && newXy[1] === 1) {
      if (diff[0]) {
        newXy[0] = diff[0] > 0 ? 2 : 0;
      }
      if (diff[1]) {
        newXy[1] = diff[1] > 0 ? 2 : 0;
      }
    }
    return newXy;
  }

  private positionToXy(position: KitOverlayPosition): [number, number] {
    switch (position) {
      case 'top':
        return [0, 1];
      case 'bottom':
        return [2, 1];
      case 'left':
        return [1, 0];
      case 'right':
        return [1, 2];
      case 'top-right':
      case 'right-top':
        return [0, 2];
      case 'top-left':
      case 'left-top':
        return [0, 0];
      case 'bottom-right':
      case 'right-bottom':
        return [2, 2];
      case 'bottom-left':
      case 'left-bottom':
        return [2, 0];
      default:
        throw new Error(`Position ${position} in not correct!`);
    }
  }

  private xyToPosition(xy: [number, number]): KitOverlayPosition {
    switch (xy[0]) {
      case 0:
        switch (xy[1]) {
          case 0:
            return 'top-left';
          case 1:
            return 'top';
          case 2:
            return 'top-right';
          default:
            throw new Error(`XY [${xy[0]}, ${xy[1]}] coor error!`);
        }
      case 1:
        switch (xy[1]) {
          case 0:
            return 'left';
          case 2:
            return 'right';
          default:
            throw new Error(`XY [${xy[0]}, ${xy[1]}] coor error!`);
        }
      case 2:
        switch (xy[1]) {
          case 0:
            return 'bottom-left';
          case 1:
            return 'bottom';
          case 2:
            return 'bottom-right';
          default:
            throw new Error(`XY [${xy[0]}, ${xy[1]}] coor error!`);
        }
      default:
        throw new Error(`XY [${xy[0]}, ${xy[1]}] coor error!`);
    }
  }
}
