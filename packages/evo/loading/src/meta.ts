export const evoLoadingGlobal = 'global';

export type EvoLoadingEndFn = () => void;

export enum EvoLoadingState {
  InProgress = 'in-progress',
  None = 'none',
}
