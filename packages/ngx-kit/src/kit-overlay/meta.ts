import { KitAnchorDirective } from '../kit-common/kit-anchor/kit-anchor.directive';

export type KitOverlayPosition = 'top' | 'right' | 'bottom' | 'left'
    | 'top-left' | 'top-right'
    | 'bottom-left' | 'bottom-right'
    | 'left-top' | 'left-bottom'
    | 'right-top' | 'right-bottom';
export type KitOverlayType = 'dropdown' | 'side';
export type KitOverlayAutofix = 'none' | 'switch-position';
export const positionPairs = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
};

export interface KitOverlayPositionDirectiveParams {
  anchor: KitAnchorDirective | HTMLElement;
  autofix: KitOverlayAutofix;
  position: KitOverlayPosition;
  type: KitOverlayType;
}
