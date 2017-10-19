export const keyArrowUp = 38;
export const keyArrowDown = 40;
export const keyArrowRight = 39;
export const keyArrowLeft = 37;
export const keyPageUp = 33;
export const keyPageDown = 34;
export const keyHome = 36;
export const keyEnd = 35;
export const keyEnter = 13;
export const keySpace = 32;
export const keyTab = 9;
export const keyEscape = 27;
export const keyBackspace = 8;
export const keyDelete = 46;

export enum KitGridControlActionType {
  noop,
  nextCell,
  prevCell,
  nextRow,
  prevRow,
  end,
  home,
  nextPage,
  prevPage,
  nextSet,
  prevSet,
  enter,
}
