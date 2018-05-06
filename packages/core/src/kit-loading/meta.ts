export const kitLoadingGlobal = 'global';

export type KitLoadingEndFn = () => void;

export enum KitLoadingState {
  InProgress = 'in-progress',
  None = 'none',
}
