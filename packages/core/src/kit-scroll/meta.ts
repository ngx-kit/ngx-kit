export interface KitScrollRefs {
  vBar: HTMLElement;
  vBarWrapper: HTMLElement;
  vWrapper: HTMLElement;
  hBar: HTMLElement;
  hBarWrapper: HTMLElement;
  hWrapper: HTMLElement;
}

export interface KitScrollState {
  nativeScrollbarWidth: number;
  dragging: boolean;
  vBar: {
    active: boolean;
    size: number;
    position: number;
  };
  hBar: {
    active: boolean;
    size: number;
    position: number;
  };
}
