import { KitCoreOverlayContainerPosition } from '../core/meta/overlay';

export interface HsvaColor {
  a: number;
  h: number;
  s: number;
  v: number;
}

export interface KitColorPickerPopupOptions {
  debounce: number;
  position: KitCoreOverlayContainerPosition;
}
