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

export type KitSidePosition = 'top' | 'top-right' | 'top-left'
  | 'right' | 'right-top' | 'right-bottom'
  | 'bottom' | 'bottom-right' | 'bottom-left'
  | 'left' | 'left-top' | 'left-bottom';
