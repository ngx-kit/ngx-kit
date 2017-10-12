import { KitAnchorDirective } from '../kit-common/kit-anchor/kit-anchor.directive';

export type KitCoreOverlayContainerPosition =
    KitCoreOverlayContainerPositionSide
    | KitCoreOverlayContainerPositionCorner;
export type KitCoreOverlayContainerPositionSide = 'top' | 'right' | 'bottom' | 'left';
export type KitCoreOverlayContainerPositionCorner = 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
export type KitCoreOverlayContainerType = 'dropdown' | 'side' | 'center' | 'fixedSide';

export interface KitOverlayPositionDirectiveParams {
  anchor: KitAnchorDirective | HTMLElement;
  position: KitCoreOverlayContainerPosition;
  type: KitCoreOverlayContainerType;
  widthType: 'full' | 'auto';
}
