export const keyArrowUp = 38;
export const keyArrowDown = 40;
export const keyArrowRight = 39;
export const keyArrowLeft = 37;
export const keyPageUp = 33;
export const keyPageDown = 34;
export const keyHome = 36;
export const keyEnd = 35;
//export const enter = 13;
//export const space = 32;
//export const tab = 9;
//export const escape = 27;
//export const backspace = 8;
//export const delete = 46;
export enum KitAriaMoveType {
  noop,
  nextCell,
  prevCell,
  nextRow,
  prevRow,
  end,
  home,
  nextPage,
  prevPage,
}

export interface KitAriaMove {
  position: [number, number];
  type: KitAriaMoveType;
}
