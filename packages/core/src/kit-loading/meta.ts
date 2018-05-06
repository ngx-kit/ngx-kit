export enum KitLoadingState {
  InProgress = 'in-progress',
  None = 'none',
}

export const kitLoadingGlobal = 'global';

export type KitLoadingEndFn = () => void;
