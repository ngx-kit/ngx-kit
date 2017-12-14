import { KitAnchorDirective } from '../kit-anchor/kit-anchor.directive';

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

export interface StrategyEl {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
}

export interface StrategyField {
  width: number;
  height: number;
}
