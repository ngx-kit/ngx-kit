export interface KitPositionRect {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
}

export interface KitPositionField {
  width: number;
  height: number;
}

export type KitPinPosition = 'top' | 'top-center' | 'top-right' | 'top-left'
  | 'right' | 'right-center' | 'right-top' | 'right-bottom'
  | 'bottom' | 'bottom-center' | 'bottom-right' | 'bottom-left'
  | 'left' | 'left-center' | 'left-top' | 'left-bottom';
